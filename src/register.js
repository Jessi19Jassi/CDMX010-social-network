import { login } from './lib/firebase.js'

export const register = (target) => {
  const html = `

  <div class="forRegister">
    <h1 class="formTitle">Registrate</h1>
      <div class="formPadre">
        <form id="siguiente" class="form">          
          <input id="name" type="text" placeholder="Nombres">
          <br>
          <input id="email" type="text" placeholder="Correo electrónico">
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
  
const formRegister = document.getElementById('siguiente');
  
formRegister.addEventListener('submit', (e) => {
    e.preventDefault()
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const name = document.getElementById('name');
    login(email, password, name);
    formRegister.reset();
    name.focus(); 
  });
}
