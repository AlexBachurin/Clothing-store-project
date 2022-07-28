import React, { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { deleteItemFromCart } from "../../store/cart/cartAction";
import Wrapper from "./Wrapper";

type CartItemProps = {
	id: number;
	name: string;
	price: number;
	imageUrl: string;
	amount: number;
};

const CartItem: FC<CartItemProps> = memo(
	({ id, name, price, imageUrl, amount }) => {
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
					<span onClick={deleteFromCart} className="delete-btn">
						&#10005;
					</span>
				</div>
			</Wrapper>
		);
	}
);

export default CartItem;
