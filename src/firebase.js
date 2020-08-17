import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyASM-_yvXAfHNrtJ7OFlw6DZqdHDnRM8S4",
    authDomain: "slack-clone-fd2c8.firebaseapp.com",
    databaseURL: "https://slack-clone-fd2c8.firebaseio.com",
    projectId: "slack-clone-fd2c8",
    storageBucket: "slack-clone-fd2c8.appspot.com",
    messagingSenderId: "558556200092",
    appId: "1:558556200092:web:c218f686e3d79c776c8159",
    measurementId: "G-FXWN5650S6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;