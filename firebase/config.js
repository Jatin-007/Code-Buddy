import firebase from 'firebase';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDdBuv22Sll9RIUnEzTPiUh5YPZ6L2UvZw",
    authDomain: "codebuddy-342ad.firebaseapp.com",
    databaseURL: "https://codebuddy-342ad.firebaseio.com",
    projectId: "codebuddy-342ad",
    storageBucket: "codebuddy-342ad.appspot.com",
    messagingSenderId: "659529769763",
    appId: "1:659529769763:web:385995fec5eaefe0a76296",
    measurementId: "G-BMCJQ66BX7"
};

if(!firebase.apps.length){
    firebase.initializeApp(config);
}
export default firebase;

const database = firebase.database();
const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    auth,
    database
}