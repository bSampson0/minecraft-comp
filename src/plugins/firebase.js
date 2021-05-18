import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDz90suadNiABfezH67COHyP1AAMjEfSkM",
  authDomain: "minecraft-6f839.firebaseapp.com",
  projectId: "minecraft-6f839",
  storageBucket: "minecraft-6f839.appspot.com",
  messagingSenderId: "810756494164",
  appId: "1:810756494164:web:eaf43d6ac6988a82b5eec1",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const storage = firebase.storage();

export { db, storage };
