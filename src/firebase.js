

import {initializeApp} from 'firebase';
const app=initializeApp({

    apiKey: "AIzaSyD1LJ4zHp9uhLwqO6fwYwTlOSMGj4sBDA8",
        authDomain: "contact-js-firebase.firebaseapp.com",
    databaseURL: "https://contact-js-firebase.firebaseio.com",
    projectId: "contact-js-firebase",
    storageBucket: "contact-js-firebase.appspot.com",
    messagingSenderId: "29433945702"

})


export const db =app.database();
export const namesRef=db.ref('names');