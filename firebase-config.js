import { initializeApp } from "firebase/app";
import { getFirestore }  from "@firebase/firestore"
import { getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyARjZHeF-n5QvFWPTKadtSNxKSLxDEiKp8",
  authDomain: "infotemplate-2d842.firebaseapp.com",
  projectId: "infotemplate-2d842",
  storageBucket: "infotemplate-2d842.appspot.com",
  messagingSenderId: "1013384016812",
  appId: "1:1013384016812:web:871f248a62a71ae10e4009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app)