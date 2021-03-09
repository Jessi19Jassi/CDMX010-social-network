import { cerrarSesion, response, getPosts } from './lib/firebase.js';
import { CardPost } from './components/CardPost.js';

export const singUp = async (target) => {
    const html = `
    <div class="walll">
        <div class="headerDad"
            <header>
                <div><img src="../imagenes/visage22.jpeg"></div>
                    <nav class="header">
                        <a href="#"><i class="icono fas fa-home"></i></a>
                        <a href="#"><i class="icono fas fa-user"></i></a>
                        <a href="#"><i class="icono fas fa-shopping-bag"></i></i></a>
                        <a href="#" id="off"><i class="icono fas fa-power-off"></i></a>
                     </nav>
            </header>
        </div>    
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
        //onNavigate('/singUp');//
        formPost.reset();
        title.focus();
        
    })

    

    document.getElementById('off').addEventListener('click', (e) => {
        e.preventDefault();
        cerrarSesion();
    });
}


