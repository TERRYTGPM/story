import firebase from "firebase";
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyBk9jTXSNzIrwzYXo05duVZ4LlHyaBHh14",
    authDomain: "mything-1d181.firebaseapp.com",
    projectId: "mything-1d181",
    storageBucket: "mything-1d181.appspot.com",
    messagingSenderId: "637735876415",
    appId: "1:637735876415:web:243dd8c04bcba977de458a"
  };

firebase.initializeApp(firebaseConfig)
export default firebase.firestore();