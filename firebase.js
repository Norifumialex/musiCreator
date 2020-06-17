import firebase from "firebase";

export const config = {
  apiKey: "AIzaSyBCWIGqng3uP2Yje70nc84aSb5NbUc1nr4",
  authDomain: "musicreator-5b7b6.firebaseapp.com",
  databaseURL: "https://musicreator-5b7b6.firebaseio.com",
  projectId: "musicreator-5b7b6",
  storageBucket: "musicreator-5b7b6.appspot.com",
  messagingSenderId: "866338761682",
  appId: "1:866338761682:web:bc46ca8e94b96185ecb60b",
  measurementId: "G-KL13PR50WH"
};

export const firebaseIni = firebase.initializeApp(config);
export const storage = firebase.storage();
export const soundsDb = firebase.database();
