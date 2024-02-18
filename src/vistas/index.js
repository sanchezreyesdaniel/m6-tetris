import { panel } from "../panel";
import { ModeloPieza } from "./clases";
 panel.nuevaPieza = panel.crearNuevaPieza()

 for(let i=0;i<panel.nuevaPieza.altura){
    for(let x= 0;x<panel.nuevaPieza.anchura){
        const elemento = panel.nuevaPieza.matriz[y][x]
        if(elemento){
            panel.matriz[y+panel.y][x+panel.x] = elemento
        }
        
    }
 }