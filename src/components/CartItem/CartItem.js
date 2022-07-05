import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import Wrapper from "./Wrapper";

const CartItem = ({ id, name, price, imageUrl, amount }) => {
	const { deleteItemFromCart } = useCartContext();
	const deleteFromCart = () => {
		deleteItemFromCart(id);
	};
	return (
		<Wrapper>
			<img src={imageUrl} alt={name} />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">{`${amount}x${price}$`}</span>
			</div>
			<div>
				<span onClick={deleteFromCart} className="delete-btn" type="button">
					&#10005;
				</span>
			</div>
		</Wrapper>
	);
};

export default CartItem;
