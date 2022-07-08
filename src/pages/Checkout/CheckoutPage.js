import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";

import Wrapper from "./Wrapper";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const CheckoutPage = () => {
	const { cartItems, cartTotal } = useSelector((store) => store.cart);
	return (
		<Wrapper>
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
			{/* empty message if cart is empty */}
			{cartItems.length === 0 ? (
				<div className="empty">
					<span className="empty-message">Your cart is empty</span>
					<Link to="/shop">
						<span className="empty-link">go shopping</span>
					</Link>
				</div>
			) : null}
			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} {...item} />;
			})}

			<span className="total">{`Total: ${cartTotal}$`}</span>
		</Wrapper>
	);
};

export default CheckoutPage;
