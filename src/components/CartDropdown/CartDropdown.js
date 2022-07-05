import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import Wrapper from "./Wrapper";
const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useCartContext();

	let navigate = useNavigate();

	const goToCheckout = () => {
		//close cart
		setIsCartOpen(false);
		navigate("/checkout");
	};
	return (
		<Wrapper>
			<div className="cart-items">
				{cartItems.length === 0 ? (
					<span className="empty-message">Your cart is empty</span>
				) : null}
				{cartItems.map((cartItem) => {
					return <CartItem key={cartItem.id} {...cartItem} />;
				})}
				<Button onClick={goToCheckout} buttonType="inverted" type="button">
					checkout
				</Button>
			</div>
		</Wrapper>
	);
};

export default CartDropdown;
