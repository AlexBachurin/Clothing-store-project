import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import "./cartItem.styles.scss";

const CartItem = ({ id, name, price, imageUrl, amount }) => {
	const { deleteItemFromCart } = useCartContext();
	const deleteFromCart = () => {
		deleteItemFromCart(id);
	};
	return (
		<div className="cart-item-container">
			<img src={imageUrl} alt={name} />
			<div className="item-details">
				<span className="name">{name}</span>
				<span className="price">{`${amount}x${price}$`}</span>
			</div>
			<div>
				<button onClick={deleteFromCart} className="delete-btn" type="button">
					del
				</button>
			</div>
		</div>
	);
};

export default CartItem;
