import React, { useState } from "react";

import {
	loginWithEmailAndPassword,
	signInWithGooglePopup,
} from "../../utils/firebase/firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import Wrapper from "./Wrapper";
const SignInForm = () => {
	const [inputValues, setInputValues] = useState({
		email: "",
		password: "",
	});

	//clear form
	const clearFormFields = () => {
		setInputValues({
			email: "",
			password: "",
		});
	};

	const handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputValues({ ...inputValues, [name]: value });
	};
	//sign in with email and password
	const handleSubmit = async (e) => {
		e.preventDefault();
		//no email or pw return
		if (!inputValues.email || !inputValues.password) {
			alert("please provide all fields");
			return;
		}
		//try to sign in user
		try {
			await loginWithEmailAndPassword(inputValues.email, inputValues.password);

			clearFormFields();
		} catch (error) {
			if (error.code === "auth/wrong-password") {
				alert("Wrong password");
			}
			if (error.code === "auth/too-many-requests") {
				alert("too many requests, try again a bit later");
			}
			if (error.code === "auth/user-not-found") {
				alert("user not found");
			}
			console.log(error.message);
		}
	};
	//login with google
	const logUserWithGooglePopup = async () => {
		await signInWithGooglePopup();
	};
	return (
		<Wrapper>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form>
				{/* email */}
				<FormInput
					labelText="Email"
					changeHandler={handleInputChange}
					name="email"
					inputValue={inputValues.email}
					type="email"
				/>
				{/* password */}
				<FormInput
					labelText="Password"
					changeHandler={handleInputChange}
					name="password"
					inputValue={inputValues.password}
					type="password"
				/>
				<div className="btn-container">
					<Button type="submit" onClick={handleSubmit}>
						Sign In
					</Button>
					<Button
						type="button"
						onClick={logUserWithGooglePopup}
						buttonType="google"
					>
						Sign in with google
					</Button>
				</div>
			</form>
		</Wrapper>
	);
};

export default SignInForm;
