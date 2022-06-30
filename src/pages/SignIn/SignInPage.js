import React from "react";
import {
	createUserDocumentFromAuth,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase";
const SignInPage = () => {
	const logUserWithGoogle = async () => {
		const res = await signInWithGooglePopup();
		//get user from response
		const user = res.user;
		//call createuserdocument function
		const userDocRef = await createUserDocumentFromAuth(user);
	};
	return (
		<div>
			<h1>sign in page</h1>
			<button onClick={logUserWithGoogle}>Sign in with google</button>
		</div>
	);
};

export default SignInPage;
