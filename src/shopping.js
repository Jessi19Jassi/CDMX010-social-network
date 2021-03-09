import { onNavigate } from './routes.js';
import { cerrarSesion } from './lib/firebase.js';
export const shopping = (target) => {
    const html = `
    <div class="headerDad"
            <header>
                <div><img src="../imagenes/visage22.jpeg"></div>
                    <nav class="header">
                        <a href="#" id="homeV"><i class="icono fas fa-home"></i></a>
                        <a href="#" id="profileV"><i class="icono fas fa-user"></i></a>
                        <a href="#" id="shoppingV"><i class="icono fas fa-shopping-bag"></i></i></a>
                        <a href="#" id="off"><i class="icono fas fa-power-off"></i></a>
                     </nav>
            </header>
        </div>    
    <p>hola aqui vamos hacer compras</p>`

    target.innerHTML = html

    document.getElementById('homeV').addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/singUp')
        });
    document.getElementById('profileV').addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/profile')
        });
    document.getElementById('shoppingV').addEventListener('click', (e) => {
        e.preventDefault();
        onNavigate('/shopping')
        });

    document.getElementById('off').addEventListener('click', (e) => {
        e.preventDefault();
        cerrarSesion();
        });
 };