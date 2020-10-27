import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsUkUskCcz96BmFnlXJHgxXkzh5taANHk",
  authDomain: "chat-a5a82.firebaseapp.com",
  databaseURL: "https://chat-a5a82.firebaseio.com",
  projectId: "chat-a5a82",
  storageBucket: "chat-a5a82.appspot.com",
  messagingSenderId: "842187912327",
  appId: "1:842187912327:web:ecafe95d666183a3537422",
  measurementId: "G-E0H8QVDM3Q"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
