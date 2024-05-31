import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB0XV1THP49tTyL1T87wga8np6o6EiKYTc",
    authDomain: "agro-99f28.firebaseapp.com",
    projectId: "agro-99f28",
    storageBucket: "agro-99f28.appspot.com",
    messagingSenderId: "325066368933",
    appId: "1:325066368933:web:a3bf15893cf2e0ea5d2a4c",
};


const serverConfig = {
    port: 3000,
    hostUrl: 'http://localhost:3000'
};

export { firebaseConfig, serverConfig };