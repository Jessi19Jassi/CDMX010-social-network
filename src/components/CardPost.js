export const CardPost = (post) => {
  return `
  <div class="cardPost">
    <div class="cPost">
    <h3 class="cardPost__title">${post.title}</h3>
     <p>${post.description}</p>
     </div>
     <div class="btnReactions">
      <button class="delete" data-id="${post.id}"><i class="icono fas fa-trash-alt"></i></button>
      <button class="edit" data-id="${post.id}"><i class="icono fas fa-edit"></i></button>
      <button><i class="icono far fa-heart"></i></button>
    </div>
  </div>
  `;
};
