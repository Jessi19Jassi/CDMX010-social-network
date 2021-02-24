import { onNavigate } from './routes.js'

export const home = (target) => {
    const html = `
    <div class="displayOne">
        <div class="title">
            <h1>Visage D' Amour<h1>
            <img src="./logo.png">
        </div>
            <div class="singUp">
                <button class="buttonF">Iniciar sesión con Facebook<i class="fab fa-facebook"></i></button><br>
                <button class="buttonG">Iniciar sesión con Google<i class="fab fa-google"></i></button><br>
                <p> ó </p><br>
                <input id="name" type="text" placeholder="usuario">
                <br>
                <input id="password" type="text" placeholder="contraseña">
                <br>
                <button id="singUp" class="buttonSingUp">Ingresar</button>
                <p>¿No tiene cuenta?</p>
                <br>
                <ul class="navbar-item"><a href="#" id="register">Registrate!!</a></ul>
            </div>
            </div>
                `

    target.innerHTML = html

    document.getElementById('register').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/register')
    })

    /*document.getElementById('homeLink').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/')
    })*/

    document.getElementById('singUp').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/singUp')
    })
}

