import { onNavigate } from './routes.js';
import { cerrarSesion } from './lib/firebase.js';
export const shopping = (target) => {
    const html = `
    <div class="shoppingD">
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
    
        <div class="makeupE">
        <h3>Enlaces de compra de marcas mas reconocidas en un costo de mediano a caro</h3>
            <div class="makeupExpensive">
                <figure id="sephora"><img src="../imagenes/sephora.png"></figure>
                <figure id="goc"><img src="../imagenes/goc.jpg"></figure>
                <figure id="chanel"><img src="../imagenes/Chanel.jpg"></figure>
                <figure id="kylie"><img src="../imagenes/kylie.jpg"></figure>
                <figure id="mac"><img src="../imagenes/mac.jpg"></figure>
                <figure id="nars"><img src="../imagenes/nars.jpg"></figure>
                <figure id="nyx"><img src="../imagenes/nyx.jpg"></figure>
            </div>
        </div>
        <div class="makeupC">
        <h3>Enlaces de compra de marcas mas reconocidas en un costo de barato a mediano</h3>
            <div class="makeupCheap">
                <figure id="hudabeuty"><img src="../imagenes/hudabeauty.png"></figure>
                <figure id="tigi"><img src="../imagenes/TIGI.png"></figure>
                <figure id="bissu"><img src="../imagenes/bissu.jpg"></figure>
                <figure id="cyzone"><img src="../imagenes/cyzone.png"></figure>
                <figure id="revlon"><img src="../imagenes/revlon.jpg"></figure>
                <figure id="jordana"><img src="../imagenes/jordana.png"></figure>
                <figure id="loreal"><img src="../imagenes/loreal.jpg"></figure>
                <figure id="lbel"><img src="../imagenes/lbel.png"></figure>
                <figure id="mybeline"><img src="../imagenes/maybelline.jpg"></figure>
                  
            </div>
        </div>      
    </div>
    `
 
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

    document.getElementById('nyx').addEventListener('click', () => {
            window.open('https://www.nyxcosmetics.com.mx/')
        });
    document.getElementById('sephora').addEventListener('click', () => {
            window.open('https://www.sephora.com.mx/')
        });
    document.getElementById('chanel').addEventListener('click', () => {
        window.open('https://www.chanel.com/mx/maquillaje')
    });
    document.getElementById('bissu').addEventListener('click', () => {
        window.open('https://bissumayoreo.com/')
    });
    document.getElementById('mybeline').addEventListener('click', () => {
        window.open('https://www.maybelline.com.mx/')
    });
    document.getElementById('loreal').addEventListener('click', () => {
        window.open('https://www.loreal-paris.com.mx/maquillaje')
    });
    document.getElementById('mac').addEventListener('click', () => {
        window.open('https://www.maccosmetics.com.mx/')
    });

 };