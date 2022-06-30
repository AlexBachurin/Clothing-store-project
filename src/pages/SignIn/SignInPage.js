import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
	auth,
	createUserDocumentFromAuth,
	signInWithGooglePopup,
	signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
const SignInPage = () => {
	const logUserWithGooglePopup = async () => {
		const res = await signInWithGooglePopup();
		//get user from response
		const user = res.user;
		//call createuserdocument function
		await createUserDocumentFromAuth(user);
	};
	const logUserWithGoogleRedirect = async () => {
		await signInWithGoogleRedirect();
	};
	//when using redirect we need to use user info after we redirected back to our page
	//after login with google, thats why we need to use useeffect then this component loads
	const createUserAfterRedirect = async () => {
		const res = await getRedirectResult(auth);
		if (res) {
			await createUserDocumentFromAuth(res.user);
		}
	};
	useEffect(() => {
		createUserAfterRedirect();
	}, []);
	return (
		<div>
			<h1>sign in page</h1>
			<button onClick={logUserWithGooglePopup}>Sign in with google</button>
			<button onClick={logUserWithGoogleRedirect}>
				Sign in with google redirect
			</button>
			<SignUpForm />
		</div>
	);
};

export default SignInPage;
