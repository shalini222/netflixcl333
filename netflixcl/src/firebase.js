import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDCVDTb6ZpLFxOSod5WMprTc6fW-pL0pU8",
  authDomain: "nflx333.firebaseapp.com",
  projectId: "nflx333",
  storageBucket: "nflx333.appspot.com",
  messagingSenderId: "601198285279",
  appId: "1:601198285279:web:ec051572e4fea7765cf46a",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
