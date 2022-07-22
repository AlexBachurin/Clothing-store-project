import React, { ButtonHTMLAttributes, FC } from "react";
import Wrapper from "./Wrapper";

// enum BUTTON_TYPE_CLASSES {
// 	google = "google-sign-in",
// 	inverted = "inverted",
// }

export type BUTTON_TYPE_CLASSES = "google" | "inverted";

export type ButtonProps = {
	buttonType: BUTTON_TYPE_CLASSES;
	children: React.ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ children, buttonType, ...otherProps }) => {
	return (
		<Wrapper className={`button-container ${buttonType}`} {...otherProps}>
			{children}
		</Wrapper>
	);
};

export default Button;
