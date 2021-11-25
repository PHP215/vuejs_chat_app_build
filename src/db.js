import firebase from 'firebase/app';
import "firebase/database";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const config = {
	apiKey: "AIzaSyD7t8IMjT3-9wIR4KaC5RpGV6YxPFerjXY",
	authDomain: "chatapp-9c626.firebaseapp.com",
	databaseURL: "https://chatapp-9c626-default-rtdb.firebaseio.com",
	projectId: "chatapp-9c626",
	storageBucket: "chatapp-9c626.appspot.com",
	messagingSenderId: "495556706030",
	appId: "1:495556706030:web:07d45f1492fe9f55383dff",
	measurementId: "G-3G2FSYD4VB"
  };

const db = firebase.initializeApp(config);
export default db;