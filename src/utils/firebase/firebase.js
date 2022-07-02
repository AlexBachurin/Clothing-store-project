import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
	onAuthStateChanged,
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

const googleProvider = new GoogleAuthProvider();
// for google
googleProvider.setCustomParameters({
	prompt: "select_account",
});

export const auth = getAuth();
//google popup
export const signInWithGooglePopup = () => {
	return signInWithPopup(auth, googleProvider);
};
//google redirect
export const signInWithGoogleRedirect = () => {
	return signInWithRedirect(auth, googleProvider);
};

//auth with email and password
export const createAuthUserWithEmailAndPassword = async (email, password) => {
	//if no email or password provided just return
	if (!email || !password) return;
	//else create user
	return await createUserWithEmailAndPassword(auth, email, password);
};

//login with email and password
export const loginWithEmailAndPassword = async (email, password) => {
	//if no email or password provided just return
	if (!email || !password) return;
	//else return promise
	return await signInWithEmailAndPassword(auth, email, password);
};

//LOGOUT
export const signOutUser = async () => {
	return await signOut(auth);
};

//AUTH LISTENER
//take callback and then auth state changes call this callback
export const onAuthStateChangedListener = (callback) => {
	//this is permanent listener
	return onAuthStateChanged(auth, callback);
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
