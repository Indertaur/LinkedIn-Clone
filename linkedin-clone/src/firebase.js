import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyASGK-lIh_ZEJsfTAL4cRfnj0NVpWB5hns",
    authDomain: "linkedin-clone-28f02.firebaseapp.com",
    projectId: "linkedin-clone-28f02",
    storageBucket: "linkedin-clone-28f02.appspot.com",
    messagingSenderId: "602087620265",
    appId: "1:602087620265:web:ccb52be9e1de3bc46773b8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();

  export {db,auth};