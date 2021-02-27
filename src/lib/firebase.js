

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

export const signUp = (emailUser,passwordUser) => {
firebase.auth().signInWithEmailAndPassword(emailUser,passwordUser)
.then((use) => {
  // Signed in
  // ...
})
.catch((error) => {
  var errorCode = error.code;
  var errorMessage = error.message;
});
};

export const observador = firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/firebase.User
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

export const startGoogle = () => {
  
  const provider = new firebase.auth.GoogleAuthProvider(); //en esta linea se pone el provedor de autenticacion//

  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

export const startFacebook = () => {
  const provider = new firebase.auth.FacebookAuthProvider(); //en esta linea se pone el provedor de autenticacion//

  firebase.auth().signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // The signed-in user info.
    var user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    var accessToken = credential.accessToken;

    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;

    // ...
  });
};

export const cerrarSesion = () =>{
  firebase.auth().signOut()
  .then((user) =>{
    console.log('Se cerro sesión');
  })
  .catch((error) => {
    console.log('error al cerra sesión');
  })
}