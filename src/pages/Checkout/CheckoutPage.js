import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useCartContext } from "../../contexts/cartContext";
import "./checkout.styles.scss";

const CheckoutPage = () => {
	const { cartItems } = useCartContext();
	return (
		<div>
			<h1>Checkout page</h1>
			<div>
				{cartItems.map((item) => {
					return <CheckoutItem key={item.id} {...item} />;
				})}
			</div>
		</div>
	);
};

export default CheckoutPage;
