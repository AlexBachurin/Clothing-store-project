import React, { useState } from "react";

import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../Button/Button";
import FormInput from "../FormInput/FormInput";
import Wrapper from "./Wrapper";
const SignUpForm = () => {
	const [inputValues, setInputValues] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	//clear form
	const clearFormFields = () => {
		setInputValues({
			displayName: "",
			email: "",
			password: "",
			confirmPassword: "",
		});
	};
	const handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputValues({ ...inputValues, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		//fill all fields
		if (
			!inputValues.displayName ||
			!inputValues.email ||
			!inputValues.password
		) {
			console.log("Please fill all fields");
			alert("Please fill all fields");
			return;
		}
		//if password doesnt match return
		if (inputValues.password !== inputValues.confirmPassword) {
			console.log("passwords doesnt match");
			alert("Password do not match");
			return;
		}
		try {
			//get back response of promise when trying to create user with email and password
			const res = await createAuthUserWithEmailAndPassword(
				inputValues.email,
				inputValues.password
			);
			const user = res.user;
			//add userName before creating doc
			user.displayName = inputValues.displayName;
			//create user doc in db from response
			await createUserDocumentFromAuth(user);
			//clear form
			clearFormFields();
		} catch (error) {
			if (error.code === "auth/email-already-in-use") {
				alert("Cannot create user, email already in use");
			} else if (error.code === "auth/weak-password") {
				alert("Password should be at least 6 characters");
			} else {
				console.log(error.message);
			}
		}
	};
	return (
		<Wrapper>
			<h2>Don't have an account</h2>
			<span>Sign up with your email and password</span>
			<form>
				<FormInput
					labelText="Display Name"
					changeHandler={handleInputChange}
					name="displayName"
					inputValue={inputValues.displayName}
					type="text"
				/>

				<FormInput
					labelText="Email"
					changeHandler={handleInputChange}
					name="email"
					inputValue={inputValues.email}
					type="email"
				/>

				<FormInput
					labelText="Password"
					changeHandler={handleInputChange}
					name="password"
					inputValue={inputValues.password}
					type="password"
				/>

				<FormInput
					labelText="Confirm Password"
					changeHandler={handleInputChange}
					name="confirmPassword"
					inputValue={inputValues.confirmPassword}
					type="password"
				/>

				<Button type="submit" onClick={handleSubmit}>
					Sign up
				</Button>
			</form>
		</Wrapper>
	);
};

export default SignUpForm;
