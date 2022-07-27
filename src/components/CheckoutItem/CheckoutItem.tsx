import React, { FC } from "react";
import { useDispatch } from "react-redux";

import { deleteItemFromCart, toggleAmount } from "../../store/cart/cartAction";
import Wrapper from "./Wrapper";

type CheckoutItemProps = {
	id: number;
	name: string;
	amount: number;
	imageUrl: string;
	price: number;
};

const CheckoutItem: FC<CheckoutItemProps> = ({
	id,
	name,
	amount,
	imageUrl,
	price,
}) => {
	const dispatch = useDispatch();
	const incrementAmount = () => {
		dispatch(toggleAmount(id, "inc"));
	};
	const decrementAmount = () => {
		dispatch(toggleAmount(id, "dec"));
	};
	const removeHandler = () => {
		dispatch(deleteItemFromCart(id));
	};
	return (
		<Wrapper>
			<div className="image-container">
				<img src={imageUrl} alt={name} />
			</div>
			<span className="name">{name}</span>
			<span className="amount">
				<div onClick={decrementAmount} className="arrow">
					&#10094;
				</div>
				<span className="amount-value">{amount}</span>
				<div onClick={incrementAmount} className="arrow">
					&#10095;
				</div>
			</span>
			<span className="price">{price}$</span>
			<div onClick={removeHandler} className="remove-button">
				&#10005;
			</div>
		</Wrapper>
	);
};

export default CheckoutItem;
