import firebase from 'firebase/app';
import "firebase/database";

const config = {
	// firebase api keys
	apiKey: "AIzaSyAq13lReCfqFccu5fE80ayeRnXm3Kn214U",
	authDomain: "vuechatapp-6cfdd.firebaseapp.com",
	projectId: "vuechatapp-6cfdd",
	storageBucket: "vuechatapp-6cfdd.appspot.com",
	messagingSenderId: "794325730273",
	appId: "1:794325730273:web:59404c9cc5c86cf65bc8a0",
	measurementId: "G-QK6FKZL0DZ"

}

const db = firebase.initializeApp(config);
export default db;