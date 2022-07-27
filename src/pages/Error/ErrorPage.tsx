import React from "react";
import { Link } from "react-router-dom";
import Button from "../../components/Button/Button";
import Wrapper from "./Wrapper";
const ErrorPage = () => {
	return (
		<Wrapper>
			<div className="error-container">
				<h2>Error, this page doesn't exist</h2>
				<Link to="/" className="error-link">
					<Button buttonType="inverted">Go Home</Button>
				</Link>
			</div>
		</Wrapper>
	);
};

export default ErrorPage;
