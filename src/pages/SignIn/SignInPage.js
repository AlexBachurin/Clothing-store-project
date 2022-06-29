import React from "react";
import { signInWithGooglePopup } from "../../utils/firebase/firebase";
const SignInPage = () => {
	const logGoogleUser = async () => {
		const res = await signInWithGooglePopup();
		console.log(res);
	};
	return (
		<div>
			<h1>sign in page</h1>
			<button onClick={logGoogleUser}>Sign in with google</button>
		</div>
	);
};

export default SignInPage;
