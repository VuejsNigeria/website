import firebase from 'firebase'
import 'firebase/firestore'

/* eslint-disable */
let config = {
    apiKey: 'AIzaSyAsfFEDRiO-vv7LrAbWcA_eF9KBzl6jL0k',
    authDomain: 'vuejsnigeria.firebaseapp.com',
    databaseURL: 'https://vuejsnigeria.firebaseio.com',
    projectId: 'vuejsnigeria',
    storageBucket: 'vuejsnigeria.appspot.com',
    messagingSenderId: '28406734459'
}

export default !firebase.apps.length ? firebase.initializeApp(config) : firebase.app()