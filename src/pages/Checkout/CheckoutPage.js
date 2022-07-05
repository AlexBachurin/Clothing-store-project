import React from "react";
import CheckoutItem from "../../components/CheckoutItem/CheckoutItem";
import { useCartContext } from "../../contexts/cartContext";
import Wrapper from "./Wrapper";

const CheckoutPage = () => {
	const { cartItems, cartTotal } = useCartContext();
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

			{cartItems.map((item) => {
				return <CheckoutItem key={item.id} {...item} />;
			})}

			<span className="total">{`Total: ${cartTotal}$`}</span>
		</Wrapper>
	);
};

export default CheckoutPage;
