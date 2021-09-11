import firebase from 'firebase';

const firebaseConfig = {
  //Config from firebase
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
