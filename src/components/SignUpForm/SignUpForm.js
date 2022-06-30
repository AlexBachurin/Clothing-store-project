import React, { useState } from "react";

const SignUpForm = () => {
	const [inputValues, setInputValues] = useState({
		name: "",
		email: "",
		password: "",
		confirmPassword: "",
	});

	const handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		setInputValues({ ...inputValues, [name]: value });
	};
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div>
			<h1>Sign up with your email and password</h1>
			<form>
				<label htmlFor="name">Display name</label>
				<input
					name="name"
					onChange={handleInputChange}
					value={inputValues.name}
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
