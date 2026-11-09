/* ============================================================
   LOGIN con Supabase (funciona en GitHub Pages)
   Registro: usuario + correo + contraseña.  Login: correo + contraseña.
   Los datos se guardan en Supabase (auth.users y tabla public.usuarios).
   ============================================================ */
(function(){
const cfg=window.WIKI_SUPABASE||{};
const configurado=cfg.url&&cfg.key&&!/TU-PROYECTO|TU-ANON/.test(cfg.url+cfg.key);
const sb=(configurado&&window.supabase)?window.supabase.createClient(cfg.url,cfg.key):null;
let actual=null, modo="login";

/* ---------- interfaz ---------- */
const btn=document.createElement("button");btn.className="lg-btn";
const menuSes=document.createElement("div");menuSes.className="lg-menu";menuSes.innerHTML='<button id="lgSalir">Cerrar sesión</button>';
const toast=document.createElement("div");toast.className="lg-toast";
const fondo=document.createElement("div");fondo.className="lg-fondo";
fondo.innerHTML=`
<div class="lg-caja" role="dialog" aria-label="Inicio de sesión">
  <button class="lg-x" aria-label="Cerrar">&times;</button>
  <h2>MINECRAFT WIKI</h2>
  <div class="lg-tabs"><button data-m="login" class="on">Iniciar sesión</button><button data-m="reg">Registrarse</button></div>
  <form id="lgForm" autocomplete="off">
    <label id="lgUserL" style="display:none">Nombre de usuario<input id="lgUser" type="text" maxlength="20"></label>
    <label>Correo electrónico<input id="lgMail" type="email" required></label>
    <label>Contraseña<input id="lgPass" type="password" required></label>
    <label id="lgConf" style="display:none">Confirmar contraseña<input id="lgPass2" type="password"></label>
    <p class="lg-msg" id="lgMsg"></p>
    <button class="lg-enviar" type="submit">Entrar</button>
  </form>
</div>`;
document.body.append(btn,menuSes,toast,fondo);

const $=id=>document.getElementById(id);
function pintarBoton(){
  btn.textContent=actual||"Login";
  btn.classList.toggle("activo",!!actual);
  menuSes.classList.remove("open");
}
function aviso(t){toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),3000)}
function msg(t,ok){const m=$("lgMsg");m.textContent=t;m.className="lg-msg"+(ok?"":" err")}
function setModo(m){
  modo=m;
  fondo.querySelectorAll(".lg-tabs button").forEach(b=>b.classList.toggle("on",b.dataset.m===m));
  const reg=m==="reg";
  $("lgUserL").style.display=reg?"block":"none";
  $("lgConf").style.display=reg?"block":"none";
  $("lgUser").required=reg;$("lgPass2").required=reg;
  fondo.querySelector(".lg-enviar").textContent=reg?"Crear cuenta":"Entrar";
  $("lgPass").autocomplete=reg?"new-password":"current-password";
  $("lgMsg").textContent="";
}
function abrir(m){setModo(m||"login");fondo.classList.add("open");(modo==="reg"?$("lgUser"):$("lgMail")).focus()}
function cerrar(){fondo.classList.remove("open");$("lgForm").reset();$("lgMsg").textContent=""}

/* ---------- sesión ---------- */
async function nombreDe(user){
  try{
    const r=await sb.from("usuarios").select("nombre_usuario").eq("id",user.id).maybeSingle();
    if(r.data&&r.data.nombre_usuario)return r.data.nombre_usuario;
  }catch(e){}
  return (user.user_metadata&&user.user_metadata.nombre_usuario)||user.email;
}
async function refrescar(sesion){
  actual=sesion&&sesion.user?await nombreDe(sesion.user):null;
  pintarBoton();
}

btn.onclick=()=>{ if(actual)menuSes.classList.toggle("open"); else abrir("login") };
$("lgSalir").onclick=async()=>{ if(sb){await sb.auth.signOut()} actual=null;pintarBoton();aviso("Sesión cerrada") };
fondo.querySelector(".lg-x").onclick=cerrar;
fondo.onclick=e=>{if(e.target===fondo)cerrar()};
document.addEventListener("keydown",e=>{if(e.key==="Escape")cerrar()});
document.addEventListener("click",e=>{if(!menuSes.contains(e.target)&&e.target!==btn)menuSes.classList.remove("open")});
fondo.querySelectorAll(".lg-tabs button").forEach(b=>b.onclick=()=>setModo(b.dataset.m));

function traducir(e){
  const t=((e&&e.message)||"").toLowerCase();
  if(t.includes("invalid login"))return "Correo o contraseña incorrectos.";
  if(t.includes("not confirmed"))return "Debes confirmar tu correo. Revisa tu bandeja de entrada.";
  if(t.includes("already registered")||t.includes("already been registered"))return "Ese correo ya está registrado.";
  if(t.includes("database error"))return "No se pudo crear la cuenta. Puede que el usuario ya exista.";
  if(t.includes("rate limit")||t.includes("too many"))return "Demasiados intentos. Espera un momento.";
  if(t.includes("password"))return "La contraseña no es válida (mínimo 6 caracteres).";
  if(t.includes("fetch")||t.includes("network"))return "No se pudo conectar con Supabase. Revisa tu internet.";
  return "Ocurrió un error: "+((e&&e.message)||"desconocido");
}

$("lgForm").onsubmit=async e=>{
  e.preventDefault();
  if(!sb)return msg("Falta configurar Supabase en js/supabase-config.js (URL y anon key).");
  const usuario=$("lgUser").value.trim(), correo=$("lgMail").value.trim(), pass=$("lgPass").value;
  const enviar=fondo.querySelector(".lg-enviar");
  try{
    if(modo==="reg"){
      if(!/^[A-Za-z0-9_]{3,20}$/.test(usuario))return msg("El usuario debe tener 3 a 20 letras, números o guion bajo.");
      if(pass.length<6)return msg("La contraseña debe tener al menos 6 caracteres.");
      if(pass!==$("lgPass2").value)return msg("Las contraseñas no coinciden.");
      enviar.disabled=true;
      const libre=await sb.rpc("nombre_disponible",{nombre:usuario});
      if(libre.error)return msg(traducir(libre.error));
      if(libre.data===false)return msg("Ese nombre de usuario ya existe.");
      const r=await sb.auth.signUp({email:correo,password:pass,options:{data:{nombre_usuario:usuario}}});
      if(r.error)return msg(traducir(r.error));
      if(!r.data.session){          // Supabase pide confirmar el correo
        setModo("login");msg("Cuenta creada. Revisa tu correo para confirmarla y luego inicia sesión.",true);return;
      }
      await refrescar(r.data.session);cerrar();aviso("Cuenta creada. Bienvenido, "+actual);
    }else{
      enviar.disabled=true;
      const r=await sb.auth.signInWithPassword({email:correo,password:pass});
      if(r.error)return msg(traducir(r.error));
      await refrescar(r.data.session);
      sb.from("usuarios").update({ultimo_acceso:new Date().toISOString()}).eq("id",r.data.session.user.id).then(()=>{},()=>{});
      cerrar();aviso("Bienvenido, "+actual);
    }
  }catch(err){msg(traducir(err))}
  finally{enviar.disabled=false}
};

pintarBoton();
if(sb){
  sb.auth.getSession().then(r=>refrescar(r.data&&r.data.session));
  sb.auth.onAuthStateChange((ev,ses)=>{ if(ev==="SIGNED_OUT"){actual=null;pintarBoton()} });
}
})();
