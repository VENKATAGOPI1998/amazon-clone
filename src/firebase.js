import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyD6Bye-zqSJpd89hqqIT2pRRRrl9HSy8bk",
  authDomain: "clone-9211e.firebaseapp.com",
  projectId: "clone-9211e",
  storageBucket: "clone-9211e.appspot.com",
  messagingSenderId: "751330000443",
  appId: "1:751330000443:web:e581d5b148e6b636a5a61e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
