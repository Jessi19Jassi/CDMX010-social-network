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

export const signUp = (email, password) => {
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

/*export function authCuentaGoogle () {
  const provider = new firebase.auth.GoogleAuthProvider(); //en esta linea se pone el provedor de autenticacion//
  
  firebase.auth().signInWithPopup(provider)//el metodo signInWithPopup te abre pantalla emergente para autenticacion de credenciales//
  .then(result =>{
    (result.user)
    Materialize.toast(`Bienvenido ${result.user.displayName} !!!`, 4000)
  })
  .catch(error => {
    console.error(error)
    Materialize.toast(`Error al autentificarse con google: ${error} `, 4000)
  })
}
*/
/* export function authCuentaFacebook () {
  const provider = new firebase.auth.FacebookAuthProvider();
  
  firebase.auth().signInWithPopup(provider).then(result =>{
    $('name')
  })
} */
 