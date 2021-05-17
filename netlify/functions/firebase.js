const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCH4F6AuC_qPVzy_sQNJRiwDBF0swgKnEc",
  authDomain: "kiei-451-8b2b5.firebaseapp.com",
  projectId: "kiei-451-8b2b5",
  storageBucket: "kiei-451-8b2b5.appspot.com",
  messagingSenderId: "190631767310",
  appId: "1:190631767310:web:39c87307ae036ce85b7b5f"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase