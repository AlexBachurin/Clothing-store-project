import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setIsCartOpen } from "../../store/cart/cartAction";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import Wrapper from "./Wrapper";
const CartDropdown = () => {
	const { cartItems } = useSelector((store) => store.cart);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const goToCheckout = () => {
		//close cart
		dispatch(setIsCartOpen(false));
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
