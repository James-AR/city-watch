import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCgoDI-dtPMV5nkLKz7Uvkgrmp9fH_fa-s",
    authDomain: "city-watch-c9fac.firebaseapp.com",
    databaseURL: "https://city-watch-c9fac.firebaseio.com",
    projectId: "city-watch-c9fac",
    storageBucket: "",
    messagingSenderId: "214907585095",
    appId: "1:214907585095:web:eaf0aaaf107b10f8"
  };

firebase.initializeApp(config)

export const firestore = firebase.firestore()
export const auth = firebase.auth()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;