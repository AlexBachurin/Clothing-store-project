import React from "react";
import { ReactComponent as Icon } from "../../assets/cart-icon.svg";
import { useCartContext } from "../../contexts/cartContext";
import Wrapper from "./Wrapper";
const CartIcon = ({ handleOpenCart }) => {
	const { cartCount } = useCartContext();
	return (
		<Wrapper onClick={handleOpenCart}>
			<Icon className="cart-icon" />
			<span className="cart-count">{cartCount}</span>
		</Wrapper>
	);
};

export default CartIcon;
