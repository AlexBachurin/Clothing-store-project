import React from "react";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext";
import Button from "../Button/Button";
import CartItem from "../CartItem/CartItem";
import "./cartDropdown.styles.scss";
const CartDropdown = () => {
	const { cartItems, setIsCartOpen } = useCartContext();

	let navigate = useNavigate();

	const goToCheckout = () => {
		//close cart
		setIsCartOpen(false);
		navigate("/checkout");
	};
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				{cartItems.map((cartItem) => {
					return <CartItem key={cartItem.id} {...cartItem} />;
				})}
				<Button onClick={goToCheckout} buttonType="inverted" type="button">
					checkout
				</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
