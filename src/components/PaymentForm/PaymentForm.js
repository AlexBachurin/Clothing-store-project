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
		//with post method and body with amount to pay
		const res = await fetch("/.netlify/functions/create-payment-intent", {
			method: "post",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ amount: 10000 }),
		}).then((data) => data.json());
		//get client secret
		const clientSecret = res.paymentIntent.client_secret;
		// payment result
		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				// card info
				card: elements.getElement(CardElement),
				//details
				billing_details: {
					name: "user name",
				},
			},
		});
		//check if we get an error back from stripe
		if (paymentResult.error) {
			alert(paymentResult.error);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				alert("Payment successfull");
			}
		}
	};
	return (
		<Wrapper>
			<form onSubmit={paymentHandler} className="payment-form">
				<h2>Credit card payment</h2>
				<CardElement />
				<Button buttonType="inverted"> pay now</Button>
			</form>
		</Wrapper>
	);
};

export default PaymentForm;
