export const CardPost = (post) => {
  return `
  <div class="cardPost">
    <div class="cPost">
    <h3 class="cardPost__title">${post.title}</h3>
     <p>${post.description}</p>
     </div>
     <div class="btnReactions">
      <button class="delete" data-id="${post.id}">Eliminar</button>
      <button>Editar</button>
      <button><i class="far fa-heart"></i></button>
    </div>
  </div>
  `;
};
