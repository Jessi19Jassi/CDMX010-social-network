import { cerrarSesion, response, getPosts } from './lib/firebase.js';
import { onNavigate } from './routes.js';
import { CardPost } from './components/CardPost.js';

export const singUp = async (target) => {
    const html = `
        <div class="wall">
            <h1 class="texto">Hola! aqui mostraremos nuestras publicaciones y comentarios</h1>
        <div class="formPost">
            <form id="form" class="formS">
                <input id="title" type="text" placeholder="Escribe aquí tu post">
                <br>
                <textarea id="description" placeholder="Escribe aquí tu descripcion"></textarea>
                <br>
                <button id="btn" class="btnPost">publicar</button>
            </form>
        </div>
         <br>
            <div id="wall" class="muro"></div>
                <br>
                <button id="logOut" class="btnOff">Cerrar Sesión</button>
            </div>
    `
    target.innerHTML = html;


    const formPost = document.getElementById('form');
    const wallElement = document.getElementById('wall');

    const posts = await getPosts()
    const postsTemplate = posts.map((post) => {
        return CardPost(post);
    });

    wallElement.innerHTML = postsTemplate.join('');
    alert('Bienvenidx');


    formPost.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = formPost["title"];
        const description = formPost["description"]

        await response(title.value, description.value);
        formPost.reset();
        title.focus();
    })

    

    document.getElementById('logOut').addEventListener('click', (e) => {
        e.preventDefault();
        cerrarSesion();
        onNavigate('/')
    });
}


