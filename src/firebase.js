import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyAka9LYC9tnzYPt6yLqHhPnTuCGTT9wttw",
    authDomain: "fb-mern-8c134.firebaseapp.com",
    databaseURL: "https://fb-mern-8c134.firebaseio.com",
    projectId: "fb-mern-8c134",
    storageBucket: "fb-mern-8c134.appspot.com",
    messagingSenderId: "666041117578",
    appId: "1:666041117578:web:804c4ad11ba26e36c73673",
    measurementId: "G-L3BLL833PK"
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const db = firebase.firestore() 

export { auth, provider } 
export default db 