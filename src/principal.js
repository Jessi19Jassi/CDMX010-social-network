import { onNavigate } from './routes.js'

export const home = (target) => {
    const html = `
    <h1>Visage D' Amour<h1>
    <input id="name" type="text" placeholder="usuario">
    <br>
    <input id="password" type="text" placeholder="contraseña">
    <br>
    <button id="ingreso">Ingresar</button>
        
            <ul class="navbar-item"><a href="#" id="aboutLink">Registrate!!</a></ul>
    `

    target.innerHTML = html

    document.getElementById('aboutLink').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/about')
    })

    /*document.getElementById('homeLink').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/')
    })*/

    document.getElementById('ingreso').addEventListener('click', (e) => {
        e.preventDefault()
        onNavigate('/contact')
    })
}

