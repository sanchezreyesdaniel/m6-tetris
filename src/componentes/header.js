import { vistaPrincipal } from "../vistas/vistaPrincipal";
import { vistaRanking } from "../vistas/vistaRanking";
import { vistaJuego } from "../vistas/vistaJuego";
export const header = {
    template: `<nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="vistaHome" class="btn btn-success mx-2 fs-4">HOME</button>
          <button id="vistaRanking" class="btn btn-success mx-2 fs-4">RANKING</button>
          <button id="vistaJuego" class="btn btn-success mx-2 fs-4">JUEGO</button>
        </div>
      </div>
    </nav>`,
    script: ()=>{
        const vistaHomeButton = document.getElementById('vistaHome');
        vistaHomeButton.addEventListener('click', () => {
            document.querySelector('main').innerHTML = vistaPrincipal.template;
            
              vistaPrincipal.script();
            
        });
        const vistaRankingButton = document.getElementById('vistaRanking');
        vistaRankingButton.addEventListener('click', () => {
            document.querySelector('main').innerHTML = vistaRanking.template;
            
              vistaRanking.script();
            
        });
        const vistaJuegoButton = document.getElementById('vistaJuego');
        vistaJuegoButton.addEventListener('click', () => {
            document.querySelector('main').innerHTML = vistaJuego.template;
            
              vistaJuego.script();
            
        });
    }
}
  