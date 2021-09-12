import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyC8xBPsBdGWwEsQcFimPKeGQEZcICVu2ww',
  authDomain: 'docs-clone-7b6d4.firebaseapp.com',
  projectId: 'docs-clone-7b6d4',
  storageBucket: 'docs-clone-7b6d4.appspot.com',
  messagingSenderId: '928851852759',
  appId: '1:928851852759:web:2beb3a9d2d5d96a461df92',
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
