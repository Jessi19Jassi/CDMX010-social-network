import {onNavigate} from './routes.js'
import {signUp} from './lib/firebase.js'
//let registar = document.querySelector('.registro')//
export var register = (target) =>{
    const html= `
    <h1>Registrate</h1>

    <div class="form-input">
    <div class="form-input">
    <input id="email" type="text" placeholder="Correo electronico">
    </div>
    <div class="form-input">
    <input id="password" type="text" placeholder="Contraseña">
    </div>
    <button class="registro">Registrarme</button>
    <button  id="siguiente">siguiente</button>
    `
target.innerHTML = html

document.getElementById('siguiente').addEventListener('click', (e) => {
    e.preventDefault()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    signUp(email, password);
    onNavigate('/singUp');
  });
}
