import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import "./checkoutItem.styles.scss";
const CheckoutItem = ({ id, name, amount, imageUrl, price }) => {
	const { toggleAmount, deleteItemFromCart } = useCartContext();

	const incrementAmount = () => {
		toggleAmount(id, "inc");
	};
	const decrementAmount = () => {
		toggleAmount(id, "dec");
	};
	const removeHandler = () => {
		deleteItemFromCart(id);
	};
	return (
		<div className="checkout-item-container">
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="amount">
				<div onClick={decrementAmount} className="arrow">
					&#10094;
				</div>
				<span className="amount-value">{amount}</span>
				<div onClick={incrementAmount} className="arrow">
					&#10095;
				</div>
			</span>
			<span className="price">{price}$</span>
			<div onClick={removeHandler} className="remove-button">
				&#10005;
			</div>
		</div>
	);
};

export default CheckoutItem;
