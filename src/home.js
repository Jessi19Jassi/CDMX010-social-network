import { onNavigate } from './routes.js'
import {startGoogle} from './lib/firebase.js'
import {startFacebook} from './lib/firebase.js'


export const home = (target) => {
    const html = `
    <div class="displayOne">
    <div class="title">
    <h1>Visage D' Amour<h1>
    <img src="../imagenes/visage4.png">
    </div>
    <div class="singUp">
    <button class="buttonF" id="facebook">Iniciar sesion con Facebook <i class="fab fa-facebook"></i></button>
    <br>
    <button class="buttonG" id="google">Iniciar sesion con Google <i class="fab fa-google"></i></button>
    <br>
    <p>O</p>
    <br>
    <input id="name" type="text" placeholder="usuario">
    <br>
    <input id="password" type="text" placeholder="contraseña">
    <br>
    <button class="bottonSingUp" id="ingreso">Ingresar</button>
    <br>
        <p>¿No tienes cuenta?</p>
            <ul class="navbar-item"><a href="#" id="aboutLink">Registrate!!</a></ul>
            </div>
            </div>
    `

    target.innerHTML = html

    document.getElementById('aboutLink').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/register')
    })

    document.getElementById('google').addEventListener('click', (e) => {

        startGoogle();
        e.preventDefault();
        onNavigate('/singUp');
    })

    
    document.getElementById('facebook').addEventListener('click', (e) => {

        startFacebook();
        e.preventDefault();
        onNavigate('/singUp');
    })

    document.getElementById('ingreso').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/singUp')
    })
}

