import React from "react";
import "./cartIcon.styles.scss";
import { ReactComponent as Icon } from "../../assets/cart-icon.svg";
import { useCartContext } from "../../contexts/cartContext";

const CartIcon = ({ handleOpenCart }) => {
	const { cartCount } = useCartContext();
	return (
		<div onClick={handleOpenCart} className="cart-icon-container">
			<Icon className="cart-icon" />
			<span className="cart-count">{cartCount}</span>
		</div>
	);
};

export default CartIcon;
