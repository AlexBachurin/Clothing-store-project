require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
	try {
		//get amount from event
		const { amount } = JSON.parse(event.body);
		//create payment intent
		const paymentIntent = await stripe.paymentIntents.create({
			amount,
			currency: "usd",
			payment_method_types: ["card"],
		});
		//if succeed send back payment intent
		return {
			statusCode: 200,
			body: JSON.stringify({ paymentIntent }),
		};
	} catch (error) {
		console.log({ error });
		return {
			status: 400,
			body: JSON.stringify({ error }),
		};
	}
};
