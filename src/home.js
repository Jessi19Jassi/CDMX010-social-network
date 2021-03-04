import { onNavigate } from './routes.js';
import { startGoogle, startFacebook, signIn } from './lib/firebase.js';

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
    <form id="start" class="formOne">
     <input id="emailUser" type="text" placeholder="Correo electronico">
     <br>
     <input id="passwordUser" type="password" placeholder="Contraseña">
     <br>
     <button class="bottonSingUp">Ingresar</button>
    </form>
        <p>¿No tienes cuenta?</p>
            <ul class="navbar-item"><a href="#" id="registerStart">Registrate!!</a></ul>
            </div>
            </div>
    `;

  target.innerHTML = html;

  document.getElementById('registerStart').addEventListener('click', (e) => {
    e.preventDefault();
    onNavigate('/register');
  });

  document.getElementById('google').addEventListener('click', (e) => {
    startGoogle();
    e.preventDefault();
    onNavigate('/singUp');
  });

  document.getElementById('facebook').addEventListener('click', (e) => {
    startFacebook();
    e.preventDefault();
    onNavigate('/singUp');
  });

  document.getElementById('start').addEventListener('submit', (e) => {
    const emailUser = document.getElementById('emailUser').value;
    const passwordUser = document.getElementById('passwordUser').value;
    signIn(emailUser, passwordUser);
    e.preventDefault();
    onNavigate('/singUp');

    //     if(observador()){

    //     }
  });
};
