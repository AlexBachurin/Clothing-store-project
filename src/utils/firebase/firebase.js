import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
	apiKey: "AIzaSyBIgVjNHPDpzwnDP_PoCq77z0-j2snE9A4",
	authDomain: "clothing-store2022-442f6.firebaseapp.com",
	projectId: "clothing-store2022-442f6",
	storageBucket: "clothing-store2022-442f6.appspot.com",
	messagingSenderId: "779990375257",
	appId: "1:779990375257:web:26391a1defe5d8804aca48",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// for google
provider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => {
	return signInWithPopup(auth, provider);
};

//create db(points to our database)
export const db = getFirestore();

//create Users in our database
export const createUserDocumentFromAuth = async (userAuth) => {
	//we want to get data from user authentication and store it inside our db
	// db = database, 'users' - collection name, id of user(user.uid) - document name
	const userDocRef = doc(db, "users", userAuth.uid);
	//create snapshot to check if instance of userDocRef exists in database
	const userSnapshot = await getDoc(userDocRef);

	//if user data not exits
	if (!userSnapshot.exists()) {
		//create/set the document with data from userAuth to collection
		const { displayName, email } = userAuth;
		const createdAt = new Date();
		try {
			await setDoc(userDocRef, {
				displayName,
				email,
				createdAt,
			});
		} catch (error) {
			console.log("error at creating user document", error.message);
		}
	}
	//if user data exists
	return userDocRef;
};
