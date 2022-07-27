import styled, { css } from "styled-components";

const subColor = "grey";
const mainColor = "black";
//create mixin with help of css
const shrinkLabelStyles = css`
	top: -14px;
	font-size: 12px;
	color: ${mainColor};
`;

type FormInputLabelProps = {
	shrink?: boolean;
};

export const FormInputLabel = styled.label<FormInputLabelProps>`
	color: ${subColor};
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	/* if shrink passed as props as truthy apply mixin styles */
	${(props) => (props.shrink ? shrinkLabelStyles : null)}
`;

const Wrapper = styled.div`
	position: relative;
	margin: 45px 0;

	.form-input {
		background: none;
		background-color: white;
		color: ${subColor};
		font-size: 18px;
		padding: 10px 10px 10px 5px;
		display: block;
		width: 100%;
		border: none;
		border-radius: 0;
		border-bottom: 1px solid ${subColor};
		margin: 25px 0;

		&:focus {
			outline: none;
		}
		/* then focus on input, find the next sibling with this class and attack mixin to label */
		/* &:focus ~ .form-input-label {
			
		} */
		/* same as before just now try to find next sibling as component */
		&:focus ~ ${FormInputLabel} {
			${shrinkLabelStyles}
		}
	}

	input[type="password"] {
		letter-spacing: 0.3em;
	}

	.form-input-label {
		color: ${subColor};
		font-size: 16px;
		font-weight: normal;
		position: absolute;
		pointer-events: none;
		left: 5px;
		top: 10px;
		transition: 300ms ease all;
		/* if shrink passed as props apply mixin styles */
		.shrink {
			${shrinkLabelStyles}
		}
	}
`;

export default Wrapper;
