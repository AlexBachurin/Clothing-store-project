import { initializeApp } from "firebase/app";
import {
	getAuth,
	signInWithRedirect,
	signInWithPopup,
	GoogleAuthProvider,
} from "firebase/auth";
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
