import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyCgZiqQvmjEca-jUsV1byZrjkiGqPW3jXE",
    authDomain: "mi-tienda-online-19553.firebaseapp.com",
    projectId: "mi-tienda-online-19553",
    storageBucket: "mi-tienda-online-19553.appspot.com",
    messagingSenderId: "718828790130",
    appId: "1:718828790130:web:394e81f6d22327ec9c7deb",
    measurementId: "G-CDW46R5VH0"
  };


// Inicializar Firebase App
const app = initializeApp(firebaseConfig);

// Obtener instancias de autenticación y firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Exportar las instancias necesarias
export { app, auth, db };