import React from "react";
import { ReactComponent as Icon } from "../../assets/cart-icon.svg";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";
const CartIcon = ({ handleOpenCart }) => {
	const { cartCount } = useSelector((store) => store.cart);
	return (
		<Wrapper onClick={handleOpenCart}>
			<Icon className="cart-icon" />
			<span className="cart-count">{cartCount}</span>
		</Wrapper>
	);
};

export default CartIcon;
