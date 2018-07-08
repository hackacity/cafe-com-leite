import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyD4CeBUHffTesYxzxWpwUJJgmLMmKH7qQc',
  authDomain: 'smart-feira.firebaseapp.com',
  databaseURL: 'https://smart-feira.firebaseio.com',
  projectId: 'smart-feira',
  storageBucket: 'smart-feira.appspot.com',
  messagingSenderId: '98845687738'
})

export const db = firebase.database()
export const storesRef = db.ref('lojas')
export default firebase
