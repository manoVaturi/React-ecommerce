import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCa36Uk759jNybA-rIoqvCld3tI1WkhKyM',
  authDomain: 'crwn-db-3de03.firebaseapp.com',
  projectId: 'crwn-db-3de03',
  storageBucket: 'crwn-db-3de03.appspot.com',
  messagingSenderId: '460290126394',
  appId: '1:460290126394:web:a09d5ac0d4fee36b17bb03',
  measurementId: 'G-QS0YGHEXH0',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
