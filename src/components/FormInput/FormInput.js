import React from "react";
import Wrapper from "./Wrapper";
import { FormInputLabel } from "./Wrapper";
const FormInput = ({ labelText, changeHandler, inputValue, name, type }) => {
	return (
		<Wrapper>
			<input
				className="form-input"
				name={name}
				onChange={changeHandler}
				value={inputValue}
				type={type}
				required
			/>
			{/* if user typed something in input it length will be more than 0, so we want to move label up, if not it stays on input */}
			{labelText && (
				<FormInputLabel
					// className={`${
					// 	inputValue.length > 0 ? "shrink" : null
					// } form-input-label`}
					// just pass truthy or falsy value in shrink props,
					// so if user typed something it will be truthy
					shrink={inputValue.length > 0}
					htmlFor={inputValue}
				>
					{labelText}
				</FormInputLabel>
			)}
		</Wrapper>
	);
};

export default FormInput;
