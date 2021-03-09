import { home } from './home.js';
import { singUp } from './singUp.js';
import { register } from './register.js';

const rootDiv = document.getElementById('root');

export const routes = { //Array donde estarán las rutas que necesitamos, referencia directa de los botones
    '/': home, //Valor que se consulta en cada elemento
    '/singUp': singUp,
    '/register': register,
};

export const onNavigate = (pathname) => {
    window.history.pushState(
      {},
      pathname,
      window.location.origin + pathname
    )
    const component = routes[pathname]
    component(rootDiv)
  };
  