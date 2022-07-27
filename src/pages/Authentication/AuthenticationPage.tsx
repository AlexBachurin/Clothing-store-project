import React from "react";
import Wrapper from "./Wrapper";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import SignInForm from "../../components/SignInForm/SignInForm";
const AuthenticationPage = () => {
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
		<Wrapper>
			<SignInForm />
			<SignUpForm />
		</Wrapper>
	);
};

export default AuthenticationPage;
