import { db } from '../firebaseConfig'

import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  orderBy,
  query,
} from 'firebase/firestore'

const tweetCollectionRef = collection(db, 'tweets')
const q = query(tweetCollectionRef, orderBy('createdAt', 'desc'))
class TweetDataService {
  addTweet = (newTweet) => {
    return addDoc(tweetCollectionRef, newTweet)
  }

  updateTweet = (id, updatedTweet) => {
    const tweetCollectionRef = doc(db, 'tweets', id)
    return updateDoc(tweetCollectionRef, updatedTweet)
  }

  deleteTweet = (id) => {
    const tweetCollectionRef = doc(db, 'tweets', id)
    return deleteDoc(tweetCollectionRef)
  }

  getAllTweets = () => {
    return getDocs(q)
  }

  getTweet = (id) => {
    const tweetCollectionRef = doc(db, 'tweets', id)
    return getDoc(tweetCollectionRef)
  }
}

export default new TweetDataService()
