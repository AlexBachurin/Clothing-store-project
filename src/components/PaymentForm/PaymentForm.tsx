import React, { FormEvent, useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../Button/Button";
import Wrapper from "./Wrapper";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const PaymentForm = () => {
	const stripe = useStripe();
	const elements = useElements();

	const { cartTotal } = useSelector((store: RootState) => store.cart);
	const { currentUser } = useSelector((store: RootState) => store.user);

	//processing payment
	const [processing, setProcessing] = useState(false);

	const paymentHandler = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		//make sure two hooks loaded when payment fires
		if (!stripe || !elements) {
			return;
		}
		//set loading
		setProcessing(true);
		//fetch request to create payment intent
		//with post method and body with amount to pay
		const res = await fetch("/.netlify/functions/create-payment-intent", {
			method: "post",
			headers: {
				"Content-type": "application/json",
			},
			body: JSON.stringify({ amount: cartTotal * 100 }),
		}).then((data) => data.json());
		//get client secret
		const clientSecret = res.paymentIntent.client_secret;
		//typing for card details, since we cant pass null
		const cardDetails = elements.getElement(CardElement);
		if (cardDetails === null) return;
		// payment result
		const paymentResult = await stripe.confirmCardPayment(clientSecret, {
			payment_method: {
				// card info
				card: cardDetails,
				//details
				billing_details: {
					name: currentUser ? currentUser.displayName : "Guest",
				},
			},
		});

		//check if we get an error back from stripe
		if (paymentResult.error) {
			alert(paymentResult.error);
			//processing to false
			setProcessing(false);
		} else {
			if (paymentResult.paymentIntent.status === "succeeded") {
				alert("Payment successfull");
				//processing to false
				setProcessing(false);
			}
		}
	};
	return (
		<Wrapper>
			<form onSubmit={paymentHandler} className="payment-form">
				<h2>Credit card payment</h2>
				<h3 className="message">
					Use <span>4242 4242 4242 4242</span> card number for testing <br />{" "}
					any future date is fine, cvc random
				</h3>

				<CardElement className="card-info" />
				<Button
					className="payment-btn"
					disabled={processing}
					buttonType="inverted"
				>
					{processing ? "Processing..." : "Pay Now"}
				</Button>
			</form>
		</Wrapper>
	);
};

export default PaymentForm;
