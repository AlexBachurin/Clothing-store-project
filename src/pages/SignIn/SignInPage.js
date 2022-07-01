import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
// import {
// 	auth,
// 	createUserDocumentFromAuth,
// 	signInWithGooglePopup,
// 	signInWithGoogleRedirect,
// } from "../../utils/firebase/firebase";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
const SignInPage = () => {
	// const logUserWithGoogleRedirect = async () => {
	// 	await signInWithGoogleRedirect();
	// };
	//when using redirect we need to use user info after we redirected back to our page
	//after login with google, thats why we need to use useeffect then this component loads
	// const createUserAfterRedirect = async () => {
	// 	const res = await getRedirectResult(auth);
	// 	if (res) {
	// 		await createUserDocumentFromAuth(res.user);
	// 	}
	// };
	// useEffect(() => {
	// 	createUserAfterRedirect();
	// }, []);
	return (
		<div>
			<h1>sign in page</h1>
			<SignUpForm />
			<SignInForm />
		</div>
	);
};

export default SignInPage;
