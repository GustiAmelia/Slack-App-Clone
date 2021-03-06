import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWNavDTOTyc-4DIO21FUWVGTo3eGyERd8",
  authDomain: "slack-clone-18d9b.firebaseapp.com",
  projectId: "slack-clone-18d9b",
  storageBucket: "slack-clone-18d9b.appspot.com",
  messagingSenderId: "600427511115",
  appId: "1:600427511115:web:1be4e7b6a1def427533cce",
  measurementId: "G-PPHQ4HRBF4"
};

// connect firebase with app
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// export
export { auth, provider };
export default db;
