import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import "./checkoutItem.styles.scss";
const CheckoutItem = ({ id, name, amount, imageUrl }) => {
	const { toggleAmount } = useCartContext();

	const incrementAmount = () => {
		toggleAmount(id, "inc");
	};
	const decrementAmount = () => {
		toggleAmount(id, "dec");
	};
	return (
		<div>
			<h2>{name}</h2>
			<span>{amount}</span>
			<button onClick={decrementAmount}>dec</button>
			<button onClick={incrementAmount}>inc</button>
		</div>
	);
};

export default CheckoutItem;
