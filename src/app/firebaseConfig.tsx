import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDExhbI1VrWqgGZBZ3wDcKLeTv6H8wshKk",
  authDomain: "project-5---fet324.firebaseapp.com",
  databaseURL: "https://project-5---fet324-default-rtdb.firebaseio.com",
  projectId: "project-5---fet324",
  storageBucket: "project-5---fet324.appspot.com",
  messagingSenderId: "107682854073",
  appId: "1:107682854073:web:be7ed815aa8f5a2d84d768"
};

const app = initializeApp(firebaseConfig);
const dbFirebase = getDatabase(app);

export { dbFirebase };
