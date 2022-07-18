import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebse.config";
import {getAuth} from "firebase/auth"

 const initializeFirebase=()=>{

    initializeApp(firebaseConfig)
}

const auth = getAuth(initializeFirebase())

export default initializeFirebase;

export {auth}