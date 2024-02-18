import { panel } from "../panel";
export const vistaRanking = {
    template: `<main class="container mt-5 bg-opacity-50 bg-dark p-2">
        <!-- Pantalla de introducción -->
        <div id="intro" class="text-center p-5">
            <button id="boton" class="btn btn-success fs-1 mt-5">JUGAR</button>
            <hr>
        </div>
        <!-- Pantalla tablas y ranking -->
        <div id="info" class="">
            <div id="ranking" class="m-5 p-5 bg-dark"></div>
            <div id="partidas" class="m-5 p-5 bg-dark"></div>
        </div>
        <!-- Pantalla del juego -->
        <div id="juego" class="d-none">
            <!-- ... (rest of your HTML code for the game screen) ... -->
        </div>
    </main>`,

    script: (panel) => {
        const boton = document.getElementById('boton');
        boton.addEventListener('click', pintaRanking);

        function pintaRanking(event,panel) {
            event.preventDefault();

            let ranking = `<h2 class="text-center text-light">Ranking</h2>
                <table class="table table-dark align-middle">
                    <thead>
                        <tr class="bg-dark">
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td class="fs-2">1</td>
                            <td><img src="" alt="avatar" /></td>
                            <td>ANDER</td>
                            <td>1255</td>
                        </tr>
                        <tr>
                            <td class="fs-2">2</td>
                            <td><img src="" alt="avatar" /></td>
                            <td>ANDER</td>
                            <td>1255</td>
                        </tr>
                        <tr>
                            <td class="fs-2">3</td>
                            <td><img src="" alt="avatar" /></td>
                            <td>ANDER</td>
                            <td>1255</td>
                        </tr>
                    </tbody>
                    <tfoot></tfoot>
                </table>`;

            console.log(ranking);
            document.getElementById('ranking').innerHTML = ranking;
        }

        const datosEjemploPartida = {
            avatar: '<img width=100px src="img/user2.svg" alt="user">',
            nick: 'MANUEL',
            puntos: 100,
            fecha: '21 MAYO 2023'
        };

        const partidas = [
            {
                avatar: '<img width=100px src="img/user1.svg" alt="user">',
                nick: 'ADRI',
                puntos: 100,
                fecha: '2023-09-27'
            },
            {
                avatar: '<img width=100px src="img/user2.svg" alt="user">',
                nick: 'VICENTE',
                puntos: 150,
                fecha: '2023-09-28'
            },
            {
                avatar: '<img width=100px src="img/user3.svg" alt="user">',
                nick: 'JAVI',
                puntos: 150,
                fecha: '2023-09-28'
            }
        ];

        pintaTabla(partidas);
        pintaDatosPartida(datosEjemploPartida);

        function pintaTabla(partidas) {
            let tabla = `<h2 class="text-center text-light">Partidas</h2>
                <div class="input-group mb-3">
                    <button id="buscar">BUSCAR</button>
                    <input
                        id="texto-buscar"
                        type="text"
                        class="form-control"
                        placeholder="Buscador"
                        aria-label="Buscador"
                        aria-describedby="button-addon2"
                    />
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                    >
                        <i class="bi bi-x-lg"></i>
                    </button>
                </div>
                <table class="table table-dark">
                    <thead>
                        <tr>
                            <td></td>
                            <td>Nick <i id="nickIcono" class="bi bi-arrow-up-square"></i></td>
                            <td>Puntuación <i id="puntosIcono" class="bi bi-arrow-up-square"></i></td>
                            <td>Fecha <i id="fechaIcono" class="bi bi-arrow-up-square"></i></td>
                        </tr>
                    </thead>
                    <tbody>`;

            partidas.forEach((element, index) => {
                tabla += `<tr>
                    <td>${element.avatar}</td>
                    <td>${element.nick}</td>
                    <td>${element.puntos}</td>
                    <td>${element.fecha}</td>
                </tr>`;
            });

            tabla += `</tbody><tfoot></tfoot></table>`;

            document.getElementById('partidas').innerHTML = tabla;
            console.log(tabla);
            document.getElementById('buscar').addEventListener('click', buscador);

        function buscador() {
            const texto = document.getElementById('texto-buscar').value.toLowerCase();
            const resultados = partidas.filter(partida => partida.nick.toLowerCase().includes(texto));
            
            pintaTabla(resultados)
            console.log(partidas)
            console.log(resultados);
        }
        }

        function insertaNuevaPartida(datosEjemploPartida) {
            console.log('Datos de la partida');
            partidas.push(datosEjemploPartida);
            console.log(datosEjemploPartida);
        }

        function pintaDatosPartida(partida,panel) {
            const confirmar = `¿Deseas guardar la partida?\n\nAvatar: ${partida.avatar}\nNick: ${partida.nick}\nPuntos: ${partida.puntos}\nFecha: ${partida.fecha}`;
            const resultadoConfirm = confirm(confirmar);

            if (resultadoConfirm) {
                insertaNuevaPartida(partida);
                console.log('Partida guardada');
                pintaTabla(partidas);
            } else {
                console.log('Partida no guardada');
            }
        }

        


        function orden(campo, tipo) {
            // Actualiza el icono para reflejar el orden actual
            const icono = document.querySelector(`#${campo}Icono`);
            icono.className = `bi bi-arrow-${tipo === 'up' ? 'down' : 'up'}-square-fill`;
        
            // Aplica el orden al array partides
            partidas.sort((a, b) => {
                if (tipo === 'up') {
                    return a[campo] > b[campo] ? 1 : -1;
                } else {
                    return a[campo] < b[campo] ? 1 : -1;
                }
            });
        
            // Vuelve a pintar la tabla con el array ordenado
            pintaTabla(partidas);
        }
        
        
        document.getElementById('nickIcono').addEventListener('click', function () {
            orden('nick', 'up');
        });
        
        document.getElementById('puntosIcono').addEventListener('click', function () {
            orden('puntos', 'up');
        });
        
        document.getElementById('fechaIcono').addEventListener('click', function () {
            orden('fecha', 'up');
        });





    },
};
