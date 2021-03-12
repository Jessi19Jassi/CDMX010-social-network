import { cerrarSesion, response, getPosts, deleteData } from './lib/firebase.js';
import { CardPost } from './components/CardPost.js';
import { onNavigate } from './routes.js';

export const singUp = async (target) => {
    const html = `
    <div class="walll">
        <div class="headerDad"
            <header>
                <div><img src="../imagenes/visage22.jpeg"></div>
                    <nav class="header">
                        <a href="#" id="homeV"><i class="icono fas fa-home"></i></a>
                        <a href="#" id="profileV"><i class="icono fas fa-user"></i></a>
                        <a href="#" id="shoppingV"><i class="icono fas fa-shopping-bag"></i></i></a>
                        <a href="#" id="off"><i class="icono fas fa-power-off"></i></a>
                     </nav>
            </header>
        </div>    
            <h1 class="texto">Escribe aqui tus publicaciones!</h1>
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

    document.getElementById('homeV').addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/singUp')
    });
    document.getElementById('profileV').addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/profile')
    });
    document.getElementById('shoppingV').addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/shopping')
    });

    document.getElementById('off').addEventListener('click', (e) => {
        e.preventDefault();
        cerrarSesion();
    });

    const formPost = document.getElementById('form');
    const wallElement = document.getElementById('wall');

    const posts = await getPosts()
    
    const postsTemplate = posts.map((post) => {
        return CardPost(post);
        
    });

    wallElement.innerHTML = postsTemplate.join('');


    formPost.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = formPost["title"];
        const description = formPost["description"]

        await response(title.value, description.value);
        onNavigate('/singUp');
        formPost.reset();
        title.focus();
        
    })

    const deleteBtns = document.querySelectorAll('.delete'); // []

    deleteBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const id = e.target.dataset.id;
            console.log(e.target.dataset)
            try {
                await deleteData(id)
                console.log("se elimino correctamente");
            } catch (error) {
                console.error("no se elimino el documento ", error);
            }
        });
    })
}


