// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from './config.js';

// Inicializa o Firebase com a configuração
const firebaseApp = initializeApp(firebaseConfig);

// Exporta instâncias de auth e firestore
const auth = getAuth(firebaseApp);
const firestore = getFirestore(firebaseApp);

export { auth, firestore };
export default firebaseApp;
