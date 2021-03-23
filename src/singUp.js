import { cerrarSesion, response, getPosts, deleteData, editData, updateData} from './lib/firebase.js';
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
        <div class="formPost">
            <form id="form" class="formS">
                <input id="title" type="text" placeholder="Escribe aquí tu post">
                <br>
                <textarea id="description" placeholder="Escribe aquí tu descripcion"></textarea>
                <br>
                <button id="btn" class="btnPost">Publicar</button>
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
    let editStatus = false;
    let ids = ''; //Parametro vacío para meter el id que elija


    formPost.addEventListener('submit', async (e) => {
        e.preventDefault();

        const title = formPost["title"];
        const description = formPost["description"];
        let arrayLikes = [];
        
        if(!editStatus){
            await response(title.value, description.value, arrayLikes);
        }else{
            await updateData(ids,{
                title: title.value,
                description: description.value,
            })
        }

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
                alert("¿Deseas eliminar el post?");
                await deleteData(id)
                onNavigate('/singUp');
            } catch (error) {
                console.error("no se elimino el documento ", error);
            }
        });
    })

    const editBtns = document.querySelectorAll('.edit'); // []

    editBtns.forEach(btn => {
        btn.addEventListener('click', async (e) => {
            const id = e.target.dataset.id;
            const doc = await editData(id);
            const docEdit = doc.data();

            editStatus = true;
            ids = doc.id; //id que elija

            formPost["title"].value = docEdit.title;
            formPost["description"].value = docEdit.description;
            formPost["btn"].innerText = 'Guardar';
        })
    })


    
    // const likeBtns = document.querySelectorAll('.like');

    // likeBtns.forEach(btn => {
    //     btn.addEventListener('click', async (e) => {
    //         await counterLikes(e);
    //     })
    // })

}
export const counterLikes = async (e) =>{
    const idUser = localStorage.getItem('userId'); //uid
    console.log(idUser);
    const id = e.target.dataset.id;
    const docu = await editData(id);

    const arrLikes = docu.data().like; //Vaciar likes
    console.log(arrLikes);
    if(arrLikes.includes(idUser)){ //Si está el like lo quita
        firebase.firestore().collection('collectionPost').doc(id).update({like: firebase.firestore.FieldValue.arrayRemove(idUser)});
        onNavigate('/singUp');
    }
    else{  //Si no está el like lo agrega
        firebase.firestore().collection('collectionPost').doc(id).update({like: firebase.firestore.FieldValue.arrayUnion(idUser)});
        onNavigate('/singUp');
    }
}