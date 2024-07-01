// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



export default defineNuxtPlugin((nuxtApp)=>{

    const {
        apiKey,
        authDomain,
        projectId,
        storageBucket,
        messagingSenderId,
        appId,
        measurementId
        }=useRuntimeConfig().public;

const firebaseConfig = {
    apiKey,
    authDomain,
    projectId, 
    storageBucket,
    messagingSenderId,
    appId,
    measurementId
  };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    return {
        provide: {
            auth,
        }
    }
        
})