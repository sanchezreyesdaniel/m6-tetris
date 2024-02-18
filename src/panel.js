import { models } from "./vistas/models";
import { ModeloPieza } from "./vistas/clases";
import { vistaRanking } from "./vistas/vistaRanking";
import { modificaData,modificaData2,modificaNick } from "./componentes/funciones";
export const panel = {
  matriz: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],
  
  pintaPanel() {
    let html = `<div id="juegoPrincipal">`;
  
    for (let fila = 0; fila < panel.matriz.length; fila++) {
      html += `<div class="fila bg-dark d-flex">`;
  
      for (let columna = 0; columna < panel.matriz[fila].length; columna++) {
        if (panel.matriz[fila][columna] == 1) {
          html += `<div class="columna bg-primary">1</div>`;
        } else if (panel.matriz[fila][columna] == 0) {
          html += `<div class="columna bg-dark">0</div>`;
        }
      }
  
      html += `</div>`;
    }
  
    html += `</div>`;
    return html;
  },

  crearNuevaPieza() {
    
    let x = Math.floor(Math.random() * 7);

    
    let posicion = Math.floor(Math.random() * (9 - models[x].matriz[0].length)+1);

    
    const pieza = new ModeloPieza(x, 0, posicion, 0);

    console.log("Nueva pieza generada:", pieza);

    return pieza;
}
,
  nuevaPieza:null,
  
  insertarPieza() {
    for(let i=0;i<panel.nuevaPieza.altura;i++){
      for(let x= 0;x<panel.nuevaPieza.longitud;x++){
          const elemento = panel.nuevaPieza.matriz[i][x]
          if(elemento){
              panel.matriz[i+panel.nuevaPieza.y][x+panel.nuevaPieza.x] = elemento
          }
          
      }
   }

    const divJuegoPrincipal = document.querySelector("#juegoPrincipal");
    divJuegoPrincipal.innerHTML = this.pintaPanel();
},
borrarPieza() {
  for(let i=0;i<panel.nuevaPieza.altura;i++){
    for(let x= 0;x<panel.nuevaPieza.longitud;x++){
        const elemento = panel.nuevaPieza.matriz[i][x]
        if(elemento){
            panel.matriz[i+panel.nuevaPieza.y][x+panel.nuevaPieza.x] = 0
        }
        
    }
 }

  const divJuegoPrincipal = document.querySelector("#juegoPrincipal");
  divJuegoPrincipal.innerHTML = this.pintaPanel();
}
,moverDer() {
  panel.borrarPieza();
  const nuevaX = panel.nuevaPieza.x + 1;
  for(let i=0;i<panel.nuevaPieza.altura;i++){
    for(let x= 0;x<panel.nuevaPieza.longitud;x++){
        const elemento = panel.nuevaPieza.matriz[i][x]
        if (panel.matriz[i+panel.nuevaPieza.y][x+nuevaX] == 1) {
         
          return;
        }

        if(elemento){
            panel.matriz[i+panel.nuevaPieza.y][x+nuevaX] = elemento
            
            // panel.puntos +=10
            // console.log(puntos)
        }
        
    }
 }
 panel.nuevaPieza.x = nuevaX

  const divJuegoPrincipal = document.querySelector("#juegoPrincipal");
  divJuegoPrincipal.innerHTML = this.pintaPanel();
},
moverIzq() {
  panel.borrarPieza();
  const nuevaX = panel.nuevaPieza.x - 1;
  for(let i=0;i<panel.nuevaPieza.altura;i++){
    for(let x= 0;x<panel.nuevaPieza.longitud;x++){
        const elemento = panel.nuevaPieza.matriz[i][x]
        if (panel.matriz[i+panel.nuevaPieza.y][x+nuevaX] == 1) {
         
          return;
        }
        if(elemento){
            panel.matriz[i+panel.nuevaPieza.y][x+nuevaX] = elemento
        }
        
    }

 }
 panel.nuevaPieza.x = nuevaX;

  const divJuegoPrincipal = document.querySelector("#juegoPrincipal");
  divJuegoPrincipal.innerHTML = this.pintaPanel();
},
moverAbaj() {
  panel.borrarPieza();
  const nuevaY = panel.nuevaPieza.y + 1;
  for(let i=0;i<panel.nuevaPieza.altura;i++){
    for(let x= 0;x<panel.nuevaPieza.longitud;x++){
        const elemento = panel.nuevaPieza.matriz[i][x]
        if (panel.matriz[panel.nuevaPieza.y + panel.nuevaPieza.altura][panel.nuevaPieza.x + x] == 1) {
          panel.insertarPieza(); 
          panel.nuevaPieza = panel.crearNuevaPieza(); 
          this.acabarPartida()
          return;
        }
        if(elemento){
            panel.matriz[i+nuevaY][x+panel.nuevaPieza.x] = elemento
            
        }
        
        
        
        
    }
 }
 panel.nuevaPieza.y = nuevaY;

  const divJuegoPrincipal = document.querySelector("#juegoPrincipal");
  divJuegoPrincipal.innerHTML = this.pintaPanel();
},
moverArrib() {
  panel.borrarPieza();
  const nuevaY = panel.nuevaPieza.y - 1;
  for(let i=0;i<panel.nuevaPieza.altura;i++){
    for(let x= 0;x<panel.nuevaPieza.longitud;x++){
        const elemento = panel.nuevaPieza.matriz[i][x]
        if(elemento){
            panel.matriz[i+nuevaY][x+panel.nuevaPieza.x] = elemento
        }
        
    }
 }
 panel.nuevaPieza.y = nuevaY
  const divJuegoPrincipal = document.querySelector("#juegoPrincipal");
  divJuegoPrincipal.innerHTML = this.pintaPanel();
}
,
controlTeclas() {
  document.addEventListener('keydown', (event) => {
    switch (event.code) {
      case 'ArrowRight':
        console.log('derecha');
        this.borrarPieza();
        this.moverDer();
        this.actualizarPuntuacion(10);
        break;
      case 'ArrowLeft':
        console.log('izquierda');
        this.borrarPieza();
        this.moverIzq();
        this.actualizarPuntuacion(10);
        break;
      case 'ArrowDown':
        console.log('abajo');
        this.borrarPieza();
        this.moverAbaj();
        this.actualizarPuntuacion(10);
        break;
      case 'ArrowUp':
        console.log('Arriba');
        this.borrarPieza();
        this.nuevaPieza.girar(this.nuevaPieza.angulo);
        this.insertarPieza(this.nuevaPieza);
        this.actualizarPuntuacion(20);
        if(this.actualizarPuntuacion==100){
          this.nuevoNick()
        }



        break;
    }
  });
},

actualizarPuntuacion(puntos) {
  // Actualizar la puntuación sumando los puntos especificados
  const puntosJuego = document.getElementById('puntosJuego');
  puntosJuego.innerHTML = parseInt(puntosJuego.innerHTML) + puntos;
  console.log('puntos', puntosJuego.innerHTML);
},
iniciarMovimiento(){
  setInterval(function() {
    panel.moverAbaj();
  }, 1000);
},

acabarPartida() {
  clearInterval(panel.intervalo);
  const mensaje = 'QUIERES GUARDAR LA PARTIDA?';
  
  if (confirm(mensaje)) {
    document.querySelector('#panel').innerHTML = `
      <div class="bg-dark p-5 m-5">
        <label for="nick">Nick:</label>
        <input type="text" id="nick" name="nick">
        <button class="bg-success text-light mt-3 botonGuardar" id="botonGuardar">GUARDAR</button>
      </div>
    `;
    
    // Agregado: Escuchar el evento click en el botón GUARDAR
    document.querySelector('#botonGuardar').addEventListener('click', function () {
      const fechaM2 = modificaData2(new Date().toISOString());
      const fechaFormateada = modificaData(fechaM2);
      const datosEjemploPartida = {
        avatar: '<img width=50 src="img/avatar4.svg">',
        nick: document.querySelector('#nick').value,
        puntos: panel.puntos,
        fecha: fechaFormateada,
      };

      panel.partidaGuardada = datosEjemploPartida;
      document.querySelector('main').innerHTML = vistaRanking.template;
      vistaRanking.script(panel.partidaGuardada);
    });
  } else {
    // ... (lógica para el caso en que no se quiera guardar)
  }
},

}
