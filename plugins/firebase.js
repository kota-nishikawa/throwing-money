import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
    apiKey: "AIzaSyAURmW6mDpx3yNfL-8oDZwkzHesgmfhGec",
    authDomain: "my-project-1525858611794.firebaseapp.com",
    databaseURL: "https://my-project-1525858611794.firebaseio.com",
    projectId: "my-project-1525858611794",
    storageBucket: "my-project-1525858611794.appspot.com",
    messagingSenderId: "971014763199",
    appId: "1:971014763199:web:4e261b8577cbfe9e5d0c0a",
    measurementId: "G-HN872MLVQY"
    }
  )
}

const firestore = firebase.firestore();

export default firebase
