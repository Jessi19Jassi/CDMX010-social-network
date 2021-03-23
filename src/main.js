import { routes } from './routes.js';
import { counterLikes } from './singUp.js';

const rootDiv = document.getElementById('root');
const home = routes[window.location.pathname];
home(rootDiv); //

rootDiv.addEventListener('click', (e) =>  {
  let button = e.target;

  if(button.id === 'like'){
    counterLikes(e);
  }
})




window.onpopstate = () => {
  const component = routes[window.location.pathname];
  component(rootDiv)
};




