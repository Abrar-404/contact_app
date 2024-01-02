// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCBJahCN0a1MdBOw0b6yKtqjKDCxJbU__4',
  authDomain: 'contactify-c7c4c.firebaseapp.com',
  projectId: 'contactify-c7c4c',
  storageBucket: 'contactify-c7c4c.appspot.com',
  messagingSenderId: '99946915295',
  appId: '1:99946915295:web:bc4251ea9e0d3f96d8106a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);