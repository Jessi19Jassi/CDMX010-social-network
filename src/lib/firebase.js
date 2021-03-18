import { onNavigate } from '../routes.js';

var firebaseConfig = {
  apiKey: "AIzaSyChYnv4amPZ8359mo3gJ6rUZhOK4MnRoLE",
  authDomain: "visage-d-amour-d406d.firebaseapp.com",
  projectId: "visage-d-amour-d406d",
  storageBucket: "visage-d-amour-d406d.appspot.com",
  messagingSenderId: "669529204375",
  appId: "1:669529204375:web:802f668fdc1eab2ab02bd2",
  measurementId: "G-5NDZB83C7P"
};


firebase.initializeApp(firebaseConfig);
const db = firebase.firestore(); 

/* Funcion para ingresar por medio de Google */
export const startGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider(); //en esta linea se pone el provedor de autenticacion//
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    onNavigate('/singUp');
    alert('Bienvenidx');
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    console.log("Acceso correcto");
  })
  .catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log("Error");
  });
}

/* Funcion para ingresar con Facebook */
export const startFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider(); //en esta linea se pone el provedor de autenticacion//

  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    onNavigate('/singUp');
    alert('Bienvenidx');
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var user = result.user;
    var accessToken = credential.accessToken;
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
  });
};

/* Funcion para iniciar sesion con email y password ya registrados en firebase */
export const signIn = (emailUser, passwordUser) => {
  firebase.auth().signInWithEmailAndPassword(emailUser,passwordUser)
  .then((userCredential) => {
    onNavigate('/singUp');
    alert('Bienvenidx');
  
  })
  .catch((error) => {
    alert('Ingresa tus datos correctamente para iniciar sesión', error);
  })
  };
  
  /* Funcion para saber si el usuario esta registrado o no en la base de datos */
  export const observador = firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    
      console.log('Estas registrado');
  
      var uid = user.uid;

    } 
    else {
      alert('Usuario no existente');
    }
  });
  observador();

/* Funcion para crear un nuevo usuario y mediantre el registro de email y contraseña*/ 
export const login = (email, password, name) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
      firebase.auth().signOut(); 
      cerrarSesion(onNavigate('/'));
      alert('Ve a tu correo electronico y verifica tu cuenta para poder ingresar');
      result.user.updateProfile({
        displayName: name
      })

      const configuracion = { //Redirije al usuario después de verificar su email
        url: 'http://localhost:5000'
      }
      result.user.sendEmailVerification(configuracion) //Enviar correo al usuario para verficar su email
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      })

      firebase.auth().signOut(); 

    })
    .catch((error) => {

      if(name === '' || email === '' || password ==='')
      {
        const errorMessage = error.message;
        alert('Llena todos los campos para completar tu registro', errorMessage);
      }
      else{
      const errorCode = error.code;
      alert('Usuario ya existente, intente con otro', errorCode);
      }
    })
};

/*----FUNCION PARA CREA LA COLECCION MAS LOS DOCUMENTOS-----*/
export const response = (title, description) => db.collection('collectionPost').doc().set({//funcion que crea una coleccion donde procesa los documentos a firestore//
  title,
  description, 
});
//----FUNCION QUE TRAE TODOS LOS ELEMENTOS DE LOS DOCUMENTOS DE LA COLECCION---//
export const getPosts = async () => {
  const querySnapshot = await db.collection('collectionPost').get();
  const posts = [];

  querySnapshot.forEach(doc => {
      const post = doc.data()
      post.id = doc.id
      posts.unshift(post); 
  })
  return posts;
}

//----FUNCION PARA ELIMINAR POSTS-----//
export const deleteData = (id) => { 
  return db.collection('collectionPost').doc(id).delete();
}
/*------FUNCION PARA EDITAR POSTS-----*/
//funcion para recolectar los elementos de un documento en especifico//
export const editData = (id) => { 
  return db.collection('collectionPost').doc(id).get();
}
//funcion para actualizar datos en firestore//
export const updateData = (id, updatedPost) => {
  return db.collection('collectionPost').doc(id).update(updatedPost);
}


//----FUNCION PARA CERRAR SESIÓN----//
export const cerrarSesion = () =>{
  firebase.auth().signOut()
  .then((user) =>{
    alert('Cerraste sesión correctamente');
    onNavigate('/')
  })
  .catch((error) => {
    console.log('Error al cerrar sesión');
  })
}