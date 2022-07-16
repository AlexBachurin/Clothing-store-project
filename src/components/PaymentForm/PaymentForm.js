import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../Button/Button";
import Wrapper from "./Wrapper";

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const paymentHandler = async (e) => {
		e.preventDefault();
		//make sure two hooks loaded when payment fires
		if (!stripe || !elements) {
			return;
		}

		//fetch request to create payment intent
	};
	return (
		<Wrapper>
			<form className="payment-form">
				<h2>Credit card payment</h2>
				<CardElement />
				<Button buttonType="inverted"> pay now</Button>
			</form>
		</Wrapper>
	);
};

export default PaymentForm;
