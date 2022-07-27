import React, { useState } from "react";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import Wrapper from "./Wrapper";
import { useDispatch } from "react-redux";
import {
	emailSignInStart,
	googleSignInStart,
} from "../../store/user/userAction";
import { AuthError, AuthErrorCodes } from "firebase/auth";
import { useNavigate } from "react-router-dom";
const SignInForm = () => {
	const dispatch = useDispatch();
	// let navigate = useNavigate();
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

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputValues({ ...inputValues, [name]: value });
	};
	//sign in with email and password
	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//no email or pw return
		if (!inputValues.email || !inputValues.password) {
			alert("please provide all fields");
			return;
		}
		//try to sign in user
		try {
			dispatch(emailSignInStart(inputValues.email, inputValues.password));
			// navigate("/");
			clearFormFields();
		} catch (error) {
			const errorType = error as AuthError;
			if (errorType.code === AuthErrorCodes.INVALID_PASSWORD) {
				alert("Wrong password");
			}
			if (errorType.code === AuthErrorCodes.TOO_MANY_ATTEMPTS_TRY_LATER) {
				alert("too many requests, try again a bit later");
			}
			if (errorType.code === AuthErrorCodes.INVALID_EMAIL) {
				alert("user not found");
			}
			console.log(error);
		}
	};
	//login with google
	const logUserWithGooglePopup = async () => {
		dispatch(googleSignInStart());
	};
	return (
		<Wrapper>
			<h2>Already have an account?</h2>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
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
					<Button type="submit">Sign In</Button>
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
