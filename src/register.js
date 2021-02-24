import {onNavigate} from './routes.js'

export const register = (target) =>{
    const html= `
<h1>Registrate</h1>
<input id="nom" type="text" placeholder="Nombre">
<br>
<input id="cElectronico" type="text" placeholder="Correo electronico">
<br>
<input id="Contraseña" type="text" placeholder="Contraseña">
<br>
<button id="restrarse">Registrarme</button>

`

target.innerHTML = html

document.getElementById('restrarse').addEventListener('click', (e) => {
    e.preventDefault()
    onNavigate('/singUp')
})

}