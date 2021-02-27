import { onNavigate } from './routes.js'
import {startGoogle} from './lib/firebase.js'
import {startFacebook} from './lib/firebase.js'
import {signUp} from './lib/firebase.js'


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
    <input id="user" type="text" placeholder="user">
    <br>
    <input id="pass" type="password" placeholder="password">
    <br>
    <button class="bottonSingUp" id="start">Ingresar</button>
    <br>
        <p>¿No tienes cuenta?</p>
            <ul class="navbar-item"><a href="#" id="registerStart">Registrate!!</a></ul>
            </div>
            </div>
    `

    target.innerHTML = html

    document.getElementById('registerStart').addEventListener('click', (e) => {
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

    document.getElementById('start').addEventListener('click', (e) => {
        
        const emailUser = document.getElementById('user').value;
        const passwordUser = document.getElementById('pass').value;
        signUp(emailUser,passwordUser);
        e.preventDefault()
        onNavigate('/singUp')

    //     if(observador()){

    //     }
    })
}

