const mobs = [
 {nombre:"Creeper", tipo:"Hostil", vida:20,
  img:"img/creeper.png", // CREEPER
  danio:"Explosión: hasta 43 puntos en dificultad Normal si está a quemarropa.",
  hace:"Se acerca en silencio al jugador y explota. Destruye bloques del entorno. Si le cae un rayo se convierte en Creeper cargado, con una explosión mayor.",
  donde:"Overworld: superficie y cuevas con poca luz.",
  drops:"Pólvora (0-2). Si lo mata un esqueleto: disco de música.",
  curioso:"Nació de un error al intentar programar un cerdo. Les temen los gatos y ocelotes."},
 {nombre:"Zombi", tipo:"Hostil", vida:20,
  img:"img/zombi.png", // ZOMBI
  danio:"2 (Fácil), 3 (Normal), 4.5 (Difícil).",
  hace:"Persigue y ataca jugadores, aldeanos y golems. Se quema con la luz del sol. Puede convertir aldeanos en zombis aldeano.",
  donde:"Overworld: zonas oscuras y de noche; también en asedios a aldeas.",
  drops:"Carne podrida (0-2). Poco frecuente: lingote de hierro, zanahoria o patata.",
  curioso:"Los zombis bebé son más rápidos y no se queman con el sol."},
 {nombre:"Esqueleto", tipo:"Hostil", vida:20,
  img:"img/esqueleto.png", // ESQUELETO
  danio:"Flecha: aproximadamente 1 a 4 puntos según la dificultad.",
  hace:"Dispara flechas a distancia y mantiene la separación con el jugador. Se quema con el sol y huye de los lobos.",
  donde:"Overworld: cuevas, mazmorras y de noche.",
  drops:"Huesos (0-2), flechas (0-2). Poco frecuente: arco.",
  curioso:"Sus huesos se usan para domesticar lobos y fabricar harina de huesos."},
 {nombre:"Araña", tipo:"Neutral", vida:16,
  img:"img/arana.png", // ARAÑA
  danio:"2 (Fácil y Normal), 3 (Difícil).",
  hace:"Escala paredes y salta hacia su objetivo. Es hostil de noche y neutral de día, salvo que se la ataque.",
  donde:"Overworld: superficie, cuevas, minas abandonadas y mazmorras.",
  drops:"Hilo (0-2), ojo de araña (0-1).",
  curioso:"A veces aparece un Jinete Araña: un esqueleto montado sobre una araña."},
 {nombre:"Enderman", tipo:"Neutral", vida:40,
  img:"img/enderman.png", // ENDERMAN
  danio:"4.5 (Fácil), 7 (Normal), 10.5 (Difícil).",
  hace:"Se teletransporta y puede recoger bloques. Se enfurece si el jugador lo mira a los ojos. El agua le causa daño.",
  donde:"Overworld (de noche), Nether y principalmente El End.",
  drops:"Perla de Ender (0-1).",
  curioso:"Mide 3 bloques de alto. Sus perlas son necesarias para llegar a El End."},
 {nombre:"Blaze", tipo:"Hostil", vida:20,
  img:"img/blaze.png", // BLAZE
  danio:"Bolas de fuego: 5 puntos más fuego. Cuerpo a cuerpo: 6 en Normal.",
  hace:"Flota y dispara ráfagas de tres bolas de fuego. Es vulnerable al agua y a las bolas de nieve; inmune al fuego y a la lava.",
  donde:"Nether: fortalezas del Nether y generadores de Blaze.",
  drops:"Vara de blaze (0-1), indispensable para pociones y Ojos de Ender.",
  curioso:"Las bolas de nieve son una forma muy efectiva de combatirlo."},
 {nombre:"Ghast", tipo:"Hostil", vida:10,
  img:"img/ghast.png", // GHAST
  danio:"Bola de fuego explosiva: hasta unos 6 puntos más fuego.",
  hace:"Flota y lanza bolas de fuego desde lejos. Se pueden devolver golpeándolas, lo que lo elimina. Emite llantos característicos.",
  donde:"Nether: valles de arena de almas, páramos de basalto y yermos.",
  drops:"Lágrima de Ghast (0-1) y pólvora (0-2).",
  curioso:"Su lágrima se usa para fabricar pociones de regeneración y cristales de Ender."},
 {nombre:"Bruja", tipo:"Hostil", vida:26,
  img:"img/bruja.png", // BRUJA
  danio:"Lanza pociones de daño, veneno, lentitud y debilidad.",
  hace:"Ataca con pociones arrojadizas y se cura bebiendo sus propias pociones. Es resistente a casi todos los efectos de poción.",
  donde:"Overworld: pantanos (chozas de bruja) y asedios a aldeas.",
  drops:"Redstone, polvo luminoso, azúcar, palos, botellas de cristal y pólvora.",
  curioso:"Su sombrero y su nariz grande la distinguen de los aldeanos."},
 {nombre:"Slime", tipo:"Hostil", vida:16,
  img:"img/slime.png", // SLIME
  danio:"Grande: 4. Mediano: 2. Pequeño: 0 (en Normal).",
  hace:"Salta hacia el jugador y, al morir, se divide en slimes más pequeños. Existen tres tamaños.",
  donde:"Overworld: pantanos y chunks de slime bajo la altura Y=40.",
  drops:"Bola de slime (solo los pequeños).",
  curioso:"Con sus bolas de slime se fabrican pistones pegajosos y bloques de slime."},
 {nombre:"Warden", tipo:"Hostil", vida:500,
  img:"img/warden.png", // WARDEN
  danio:"Cuerpo a cuerpo: 30 (Normal). Ataque sónico: 10, ignora armadura.",
  hace:"Es ciego y detecta por sonido y vibraciones. Se acerca a donde se hace ruido. Es extremadamente resistente.",
  donde:"Overworld: ciudades antiguas del bioma Deep Dark.",
  drops:"Catalizador de sculk.",
  curioso:"Se invoca al activar varios sensores de sculk gritadores cerca del jugador."},
 {nombre:"Cerdo", tipo:"Pasivo", vida:10,
  img:"img/cerdo.png", // CERDO
  danio:"No ataca.",
  hace:"Deambula por el entorno. Se puede montar con una silla y dirigir con una caña con zanahoria.",
  donde:"Overworld: praderas, bosques y llanuras.",
  drops:"Chuleta de cerdo (1-3), silla si la lleva puesta.",
  curioso:"Si lo golpea un rayo, se transforma en Piglin zombificado."},
 {nombre:"Vaca", tipo:"Pasivo", vida:10,
  img:"img/vaca.png", // VACA
  danio:"No ataca.",
  hace:"Se ordeña con un cubo para obtener leche, que elimina efectos de poción. Se reproduce con trigo.",
  donde:"Overworld: praderas, llanuras y bosques.",
  drops:"Carne de vaca (1-3) y cuero (0-2).",
  curioso:"Su variante, la Mooshroom (roja), vive en islas de champiñones."},
 {nombre:"Oveja", tipo:"Pasivo", vida:8,
  img:"img/oveja.png", // OVEJA
  danio:"No ataca.",
  hace:"Se esquila con tijeras para obtener lana, que vuelve a crecer al comer hierba. Se puede teñir.",
  donde:"Overworld: praderas, colinas y montañas.",
  drops:"Lana (1), cordero crudo (1-2).",
  curioso:"Una oveja llamada «jeb_» cambia de colores en un ciclo continuo."},
 {nombre:"Gallina", tipo:"Pasivo", vida:4,
  img:"img/gallina.png", // GALLINA
  danio:"No ataca.",
  hace:"Pone huevos cada cierto tiempo y cae lentamente sin recibir daño por caídas. Se reproduce con semillas.",
  donde:"Overworld: praderas, bosques y llanuras.",
  drops:"Pollo crudo (1), plumas (0-2).",
  curioso:"Al lanzar un huevo hay una pequeña probabilidad de que nazca una gallina."},
 {nombre:"Lobo", tipo:"Neutral", vida:8,
  img:"img/lobo.png", // LOBO
  danio:"4 puntos.",
  hace:"Es neutral salvo que se le ataque. Se domestica con huesos y entonces defiende al jugador. Ataca esqueletos y ovejas.",
  donde:"Overworld: bosques, taigas y bosques de pinos.",
  drops:"No suelta objetos.",
  curioso:"Al domesticarlo su vida sube a 40 puntos (20 corazones) y se le puede poner un collar."},
 {nombre:"Aldeano", tipo:"Pasivo", vida:20,
  img:"img/aldeano.png", // ALDEANO
  danio:"No ataca.",
  hace:"Vive en aldeas, tiene una profesión y comercia con esmeraldas. Huye de los zombis y otros mobs hostiles.",
  donde:"Overworld: aldeas.",
  drops:"No suelta objetos.",
  curioso:"Cada profesión se reconoce por su ropa y su bloque de trabajo."},
 {nombre:"Gólem de hierro", tipo:"Neutral", vida:100,
  img:"img/golem.png", // GÓLEM DE HIERRO
  danio:"7 a 21 puntos según la dificultad.",
  hace:"Protege aldeas y ataca mobs hostiles, lanzándolos por los aires. Es neutral con el jugador salvo que lo ataque.",
  donde:"Aldeas (aparece solo) o se construye con 4 bloques de hierro y una calabaza.",
  drops:"Lingotes de hierro (3-5) y amapolas (0-2).",
  curioso:"Puede entregar una amapola a los aldeanos niños."},
 {nombre:"Axolote", tipo:"Pasivo", vida:14,
  img:"img/axolote.png", // AXOLOTE
  danio:"2 puntos, solo contra mobs acuáticos.",
  hace:"Ataca peces y calamares, y ayuda al jugador en combate contra mobs acuáticos. Finge su muerte para regenerarse.",
  donde:"Overworld: agua en cuevas exuberantes.",
  drops:"No suelta objetos.",
  curioso:"Se captura con un cubo de agua y se reproduce con cubos de pez tropical."},
 {nombre:"Wither", tipo:"Jefe", vida:300,
  img:"img/wither.png", // WITHER
  danio:"Cráneos explosivos y efecto Wither; cuerpo a cuerpo 8 (Normal) más efecto.",
  hace:"Vuela y dispara cráneos que destruyen bloques. Al invocarlo explota; con poca vida se vuelve vulnerable a las flechas.",
  donde:"Se invoca con 4 bloques de arena de almas y 3 cráneos de Wither esqueleto.",
  drops:"Estrella del Nether (1), necesaria para fabricar balizas.",
  curioso:"Es uno de los dos jefes del juego, junto con el Dragón de Ender."},
 {nombre:"Dragón de Ender", tipo:"Jefe", vida:200,
  img:"img/dragon.png", // DRAGÓN DE ENDER
  danio:"Embestida: 10 (Normal). Aliento: daño continuo.",
  hace:"Vuela sobre la isla central de El End. Se cura con los cristales de Ender, que hay que destruir antes de atacarlo.",
  donde:"El End: isla principal.",
  drops:"Mucha experiencia (12000 la primera vez) y el huevo de dragón.",
  curioso:"Al derrotarlo se activa un portal hacia las islas exteriores de El End."}
];

const grid=document.getElementById("grid"), modal=document.getElementById("modal"), box=document.getElementById("box");

function imagen(m){
  const i=new Image(); i.alt=m.nombre; i.src=m.img;
  i.onerror=()=>{i.style.visibility="hidden"};   
  return i;
}

/* aparecen al hacer scroll */
const obs=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add("show");obs.unobserve(e.target)}}),{threshold:.15});

function pintar(f="Todos"){
  grid.innerHTML="";
  mobs.filter(m=>f==="Todos"||m.tipo===f).forEach(m=>{
    const c=document.createElement("div");c.className="card";c.dataset.t=m.tipo;
    const im=document.createElement("div");im.className="img";im.appendChild(imagen(m));
    const t=document.createElement("h3");t.textContent=m.nombre;
    c.append(im,t);c.onclick=()=>abrir(m);grid.appendChild(c);obs.observe(c);
  });
}

function abrir(m){
  box.innerHTML=`<button class="x" onclick="cerrar()" aria-label="Cerrar">&times;</button>
  <div class="big"></div>
  <h2>${m.nombre}</h2>
  <div class="center"><span class="tag ${m.tipo}">${m.tipo}</span></div>
  <div class="fila"><b>Vida</b><span>${m.vida} puntos (${m.vida/2} corazones)</span></div>
  <div class="fila"><b>Daño</b><span>${m.danio}</span></div>
  <div class="fila"><b>Comportamiento</b><span>${m.hace}</span></div>
  <div class="fila"><b>Dónde aparece</b><span>${m.donde}</span></div>
  <div class="fila"><b>Objetos que suelta</b><span>${m.drops}</span></div>
  <div class="fila"><b>Dato curioso</b><span>${m.curioso}</span></div>`;
  box.querySelector(".big").appendChild(imagen(m));
  modal.classList.add("open");
}
function cerrar(){modal.classList.remove("open")}
modal.onclick=e=>{if(e.target===modal)cerrar()};
document.addEventListener("keydown",e=>{if(e.key==="Escape")cerrar()});

document.getElementById("tabs").onclick=e=>{
  if(e.target.tagName!=="BUTTON")return;
  document.querySelectorAll(".tabs button").forEach(b=>b.classList.toggle("on",b===e.target));
  pintar(e.target.dataset.f);
};
pintar();
