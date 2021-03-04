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
/* coneccion con firestore*/
const db = firebase.firestore(); 

/* Funcion para crear un nuevo usuario y mediantre el registro de email y contraseña*/ 
export const login = (email, password) => {
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((user) => {
      //Signed 
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
    })
};

/* Funcion para iniciar sesion con email y password ya registrados en firebase */
export const signIn = (emailUser, passwordUser) => {
firebase.auth().signInWithEmailAndPassword(emailUser,passwordUser)
.then((userCredential) => {
  signIn.reset();
  // ...
  alert('Bienvenidx', userCredential);
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
  console.log("usuario no registrado", errorCode);
  console.log(errorMessage);
})
};

/* Funcion para saber si el usuario esta registrado o no en la base de datos */
export const observador = firebase.auth().onAuthStateChanged((user) => {
  if (user) {
  
    console.log('Estas registrado');

    var uid = user.uid;
    // ...
  } else {
    // User is signed out
    // ...
    console.log('No existe el usuario');
  }
});
observador();

/* Funcion para ingresar por medio de Google */
export const startGoogle = () => {
  const provider = new firebase.auth.GoogleAuthProvider(); //en esta linea se pone el provedor de autenticacion//
  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;
    var token = credential.accessToken;
    var user = result.user;
    console.log("acceso correcto");
  })
  .catch((error) => {
    
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log("error");
  });
}

/* Funcion para ingresar con Facebook */
export const startFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider(); //en esta linea se pone el provedor de autenticacion//

  firebase.auth().signInWithPopup(provider)
  .then((result) => {
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

/* Funcion para crear los posts */
export const response = (title, description) => db.collection('collectionPost').doc().set({//funcion que crea una coleccion donde procesa los documentos a firestore//
  title,
  description, 
});

export const getPosts = async () => {
  const querySnapshot = await db.collection('collectionPost').get();
  const posts = []
  querySnapshot.forEach(doc => {
      posts.push(doc.data())
  })

  return posts;
}

/*  */
export const cerrarSesion = () =>{
  firebase.auth().signOut()
  .then((user) =>{
    console.log('Se cerro sesión');
  })
  .catch((error) => {
    console.log('error al cerra sesión');
  })
}