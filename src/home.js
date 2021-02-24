import { onNavigate } from './routes.js'

export const home = (target) => {
    const html = `
    <div class="displayOne">
    <div class="title">
    <h1>Visage D' Amour<h1>
    <img src="../imagenes/visage4.png">
    </div>
    <div class="singUp">
    <button class="buttonF">Iniciar sesion con Facebook <i class="fab fa-facebook"></i></button>
    <br>
    <button class="buttonG">Iniciar sesion con Google <i class="fab fa-google"></i></button>
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

    /*document.getElementById('homeLink').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/')
    })*/

    document.getElementById('ingreso').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/singUp')
    })
}

