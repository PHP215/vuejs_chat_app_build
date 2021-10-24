import firebase from 'firebase/app';
import "firebase/database";
import "firebase/auth";

const config = {
	// firebase api keys
	apiKey: "AIzaSyBrArXPaj6SylCcouLCrwMAOX1LMkPaaRE",
	authDomain: "vuechatapp-8e698.firebaseapp.com",
	projectId: "vuechatapp-8e698",
	storageBucket: "vuechatapp-8e698.appspot.com",
	messagingSenderId: "1022117806690",
	appId: "1:1022117806690:web:10252598a0111e8911873b"

}

const db = firebase.initializeApp(config);
export default db;