import React, { FC } from "react";
import { ReactComponent as Icon } from "../../assets/cart-icon.svg";
import { useSelector } from "react-redux";
import Wrapper from "./Wrapper";
import { RootState } from "../../store/store";

type CartIconProps = {
	handleOpenCart: () => void;
};

const CartIcon: FC<CartIconProps> = ({ handleOpenCart }) => {
	const { cartCount } = useSelector((store: RootState) => store.cart);
	return (
		<Wrapper onClick={handleOpenCart}>
			<Icon className="cart-icon" />
			<span className="cart-count">{cartCount}</span>
		</Wrapper>
	);
};

export default CartIcon;
