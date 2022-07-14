import React from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/cart/cartAction";
import Wrapper from "./Wrapper";

const CartItem = ({ id, name, price, imageUrl, amount }) => {
	const dispatch = useDispatch();
	const deleteFromCart = () => {
		dispatch(deleteItemFromCart(id));
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
