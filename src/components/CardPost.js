export const CardPost = (post) => {
  const arrayLikes = post.like;
  const countLikes = arrayLikes.length;

  return `
  <div class="cardPost">
    <div class="cPost">
    <h3 class="cardPost__title">${post.title}</h3>
     <p>${post.description}</p>
     </div>
     <div class="btnReactions">
      <button class="delete" data-id="${post.id}"><i class="icono fas fa-trash-alt"></i></button>
      <button class="edit" data-id="${post.id}"><i class="icono fas fa-edit"></i></button>
      <button class="like" id="like" data-id="${post.id}"><i class="icono far fa-heart"></i></button>
      <span class="count" data-id="${post.id}">${countLikes}</span> 
    </div>
  </div>
  `;
};
