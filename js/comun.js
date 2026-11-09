const NS="http://www.w3.org/2000/svg";
const arte={
 grass:{p:{g:"#5aa845",e:"#3d7a2f",d:"#8b5a2b",k:"#6b4220"},m:["gggggggg","geggggeg","gdgdggdg","dddddddd","dkddddkd","dddddddd","dddkdddd","dddddddd"]},
 creeper:{p:{g:"#5aa845",d:"#3d7a2f",k:"#0b0b0b"},m:["gggggggg","gdggggdg","gkkggkkg","gkkggkkg","gggkkggg","ggkkkkgg","ggkkkkgg","ggkggkgg"]},
 diamond:{p:{b:"#1aa7a0",c:"#4de8e0",w:"#c8fffb"},m:["..bbbb..",".bcwwcb.","bcwcccbb","bccccccb",".bccccb.","..bccb..","...bb...","........"]},
 torch:{p:{o:"#e8741c",y:"#ffe14d",s:"#8b5a2b"},m:["...o....","..oyo...","..oyo...","...s....","...s....","...s....","...s....","...s...."]},
 heart:{p:{r:"#e02929",w:"#ff9a9a",d:"#8a1010"},m:[".rr..rr.","rwrrrrrr","rrrrrrrr","rrrrrrrd",".rrrrrd.","..rrrd..","...rd...","........"]},
 tnt:{p:{r:"#d6402e",w:"#f2f2f2",k:"#222"},m:["rrrrrrrr","rrrrrrrr","wwwwwwww","wkkwkkwk","wwkwkwwk","wwwwwwww","rrrrrrrr","rrrrrrrr"]},
 sword:{p:{b:"#dfe6ea",g:"#e0b02b",h:"#8b5a2b"},m:["......bb",".....bbb","....bbb.","...bbb..","g.bbb...",".gbb....","..gg....",".hh....."]},
 emerald:{p:{d:"#1b8a4b",g:"#2ecc71",w:"#b6f5cf"},m:["..dddd..",".dgwwgd.","dgwggggd","dggggggd","dgggggdd",".dgggdd.","..dddd..","........"]},
 pearl:{p:{d:"#0d4a42",g:"#1f8f7f",l:"#5fd1bf"},m:["..dddd..",".dggllgd","dgglggld","dgggggld","dgggggdd","dgggggdd",".dgggdd.","..dddd.."]},
 blaze:{p:{y:"#f2c230",o:"#d98d1a",k:"#2a2018"},m:["yyyyyyyy","yoyyyyoy","yyyyyyyy","ykkyykky","yyyyyyyy","yyykkyyy","yooyyooy","yyyyyyyy"]}
};
function dibujo(a){
  const s=document.createElementNS(NS,"svg");
  s.setAttribute("viewBox","0 0 8 8");s.setAttribute("shape-rendering","crispEdges");
  a.m.forEach((f,y)=>[...f].forEach((c,x)=>{
    if(c==".")return;
    const r=document.createElementNS(NS,"rect");
    r.setAttribute("x",x);r.setAttribute("y",y);r.setAttribute("width",1);r.setAttribute("height",1);
    r.setAttribute("fill",a.p[c]);s.appendChild(r);
  }));
  return s;
}
["grass","creeper","diamond","torch","heart"].forEach(n=>document.getElementById("izq").appendChild(dibujo(arte[n])));
["tnt","sword","emerald","pearl","blaze"].forEach(n=>document.getElementById("der").appendChild(dibujo(arte[n])));

/* Barra Lateral */
const pagina=document.body.dataset.pagina;
const menu=[["index.html","Inicio","torch","inicio"],["mobs.html","Mobs","creeper","mobs"],[null,"Bloques","grass"],[null,"Objetos","diamond"]];

const burger=document.createElement("button");burger.className="burger";burger.setAttribute("aria-label","Menú");burger.innerHTML="<span></span><span></span><span></span>";
const fondo=document.createElement("div");fondo.className="fondo";
const side=document.createElement("aside");side.className="sidebar";

const marca=document.createElement("div");marca.className="marca";
const ml=document.createElement("div");ml.innerHTML="<b>MINECRAFT</b><small>Wiki de Mobs</small>";
const logo=new Image(); logo.src="img/grass.png"; logo.alt="Minecraft";
marca.append(logo,ml);

const nav=document.createElement("nav");
menu.forEach(([href,texto,ic,id])=>{
  const el=document.createElement(href?"a":"div");
  el.className="item"+(href?"":" off")+(id===pagina?" on":"");
  if(href)el.href=href;
  const t=document.createElement("span");
  t.innerHTML=texto+(href?"":"<small>Próximamente</small>");
  el.append(dibujo(arte[ic]),t);nav.appendChild(el);
});
const pie=document.createElement("footer");pie.textContent="Proyecto escolar";
side.append(marca,nav,pie);
document.body.prepend(side,fondo,burger);

function toggleMenu(o){const a=o??!side.classList.contains("open");side.classList.toggle("open",a);fondo.classList.toggle("open",a)}
burger.onclick=()=>toggleMenu();
fondo.onclick=()=>toggleMenu(false);
