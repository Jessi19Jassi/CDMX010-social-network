import {cerrarSesion} from './lib/firebase.js';

export const singUp = (target) =>{
    const html=
`<h1 class="texto">Hola! aqui mostraremos nuestras publicaciones y comentarios</h1>
<input type="text" placeholder="Escribe aquí tu post">
<br>
<button>publicar</button>
<br>
<p>aqui se publicaran tus post</p>
<button id="logOut">Cerrar Sesión</button>

`

target.innerHTML= html


document.getElementById('logOut').addEventListener('click', (e) => {
    e.preventDefault();
    cerrarSesion();
 })
 }


