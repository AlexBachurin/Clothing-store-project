import React from "react";
import "./formInput.styles.scss";
const FormInput = ({ labelText, changeHandler, inputValue, name, type }) => {
	return (
		<div className="form-input-group">
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
				<label
					className={`${
						inputValue.length > 0 ? "shrink" : null
					} form-input-label`}
					htmlFor={inputValue}
				>
					{labelText}
				</label>
			)}
		</div>
	);
};

export default FormInput;
