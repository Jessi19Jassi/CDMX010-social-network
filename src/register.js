import { onNavigate } from './routes.js'
import { login } from './lib/firebase.js'

export var register = (target) => {
  const html = `

  <div class="forRegister">
    <h1 class="formTitle">Registrate</h1>
      <div class="formPadre">
        <form id="siguiente" class="form">
          <input id="email" type="text" placeholder="Correo electronico">
          <br>
          <input id="password" type="password" placeholder="Contraseña">
          <br>
        <button class="btnRegister" >Registrarme</button>
        </form>
      </div> 
     <img  src="../imagenes/brochas100.png" class="imagen"> 
  </div>
    `
  target.innerHTML = html

  document.getElementById('siguiente').addEventListener('submit', (e) => {
    e.preventDefault()
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    login(email, password);
    onNavigate('/singUp');
  });
}
