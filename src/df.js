import { db } from '../firebaseConfig'

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from 'firebase/firestore'

const tweetCollectionRef = collection(db, 'tweets')

class TweetDataService {
  addTweet = (newBook) => {
    return
  }
}
