import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDaCJ2QGm-epEiiCTps_B8rTGivCiywMdg",
  authDomain: "aimdatabase-db87d.firebaseapp.com",
  databaseURL: "https://aimdatabase-db87d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "aimdatabase-db87d",
  storageBucket: "aimdatabase-db87d.appspot.com",
  messagingSenderId: "17048738724",
  appId: "1:17048738724:web:a4c59a25d8cd2c99933f31",
  measurementId: "G-5GXNWLNF5W"
};

const app = initializeApp(firebaseConfig);

function writeUserData(userId, name, email, imageUrl){
    const db = getDatabase()
    const reference = ref(db, 'users/' + userId);

    set(reference, {
    username: name,
    email: email,
    profile_pitcure : imageUrl
    });
    }

writeUserData("Maxapelqvist", "Max", "max@aimgroup.se", "myimageurl");
