import React, { useState } from "react";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
const SignUpForm = () => {
	const [inputValues, setInputValues] = useState({
		displayName: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

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
			return;
		}
		//if password doesnt match return
		if (inputValues.password !== inputValues.confirmPassword) {
			console.log("passwords doesnt match");
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
		} catch (error) {
			console.log(error.message);
		}
	};
	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form>
				<label htmlFor="displayName">Display name</label>
				<input
					name="displayName"
					onChange={handleInputChange}
					value={inputValues.displayName}
					type="text"
					required
				/>

				<label htmlFor="email">Email</label>
				<input
					onChange={handleInputChange}
					name="email"
					value={inputValues.email}
					type="email"
					required
				/>

				<label htmlFor="password">Password</label>
				<input
					name="password"
					value={inputValues.password}
					type="password"
					required
					onChange={handleInputChange}
				/>

				<label htmlFor="confirmPassword">Confirm Password</label>
				<input
					name="confirmPassword"
					value={inputValues.confirmPassword}
					type="password"
					required
					onChange={handleInputChange}
				/>

				<button onClick={handleSubmit} type="submit">
					Log in
				</button>
			</form>
		</div>
	);
};

export default SignUpForm;
