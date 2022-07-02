import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useCartContext } from "../../contexts/cartContext";
import "./checkout.styles.scss";

const CheckoutPage = () => {
	const { cartItems } = useCartContext();
	return (
		<div className="checkout-container">
			<div className="checkout-header">
				<div className="header-block">
					<span>Product</span>
				</div>
				<div className="header-block">
					<span>Description</span>
				</div>
				<div className="header-block">
					<span>Quantity</span>
				</div>
				<div className="header-block">
					<span>Price</span>
				</div>
				<div className="header-block">
					<span>Remove</span>
				</div>
			</div>

			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} {...item} />;
			})}

			<span className="total">Total: 0</span>
		</div>
	);
};

export default CheckoutPage;
