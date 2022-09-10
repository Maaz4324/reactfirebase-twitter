import { getFirestore } from 'firebase/firestore'
import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const firebaseConfig = {
  apiKey: 'AIzaSyDPwW-Xo8u8muUSpAyVSubhuEEpvhCJwTc',
  authDomain: 'twitter-clone-592db.firebaseapp.com',
  projectId: 'twitter-clone-592db',
  storageBucket: 'twitter-clone-592db.appspot.com',
  messagingSenderId: '714049199228',
  appId: '1:714049199228:web:ae6073ad83494f6ecd3df9',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
export const auth = getAuth(app)
