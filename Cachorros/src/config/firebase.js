// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {addDoc, collection, getFirestore} from  "firebase/firestore"
//import { productos } from "../data/asyncMock";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = { //si se lleva a var de entorno mandarla para que compile fuera de local
  apiKey: "AIzaSyDXSWLjWdTLFALfFeMmFHmBLLzAT7qiqvk",
  authDomain: "tigerfood-ecom.firebaseapp.com",
  projectId: "tigerfood-ecom",
  storageBucket: "tigerfood-ecom.appspot.com",
  messagingSenderId: "53562060555",
  appId: "1:53562060555:web:4b33936f781f75ea907c0e",
  measurementId: "G-EM4JS63CSN"
};

console.log('se conecta')
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db =  getFirestore(app) //exporto la base de datos, no es base relacional, trabaja con documentos

//productos.forEach((prod) => {
//  addDoc(collection(db,"productos"), prod) //método addDoc recibe 2 parámetros: coleccion y la crea y objeto a cargar
//  .then( (data) => console.log(`El producto ${data.id} se subio bien`)) // muestro por consola el id
//  .catch((error) => console.log(error))
//})

