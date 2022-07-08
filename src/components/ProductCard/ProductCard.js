import React from "react";
import Wrapper from "./Wrapper";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import { addToCart, setIsCartOpen } from "../../store/cart/cartAction";
const ProductCard = ({ id, imageUrl, name, price }) => {
	const dispatch = useDispatch();

	//send object to cart with all values and add amount of 1 as default
	const addItemToCart = () => {
		dispatch(addToCart({ id, imageUrl, name, price, amount: 1 }));
		//open cart dropdown when adding to cart
		dispatch(setIsCartOpen(true));
	};
	return (
		<Wrapper>
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}$</span>
			</div>
			<Button onClick={addItemToCart} buttonType="inverted" type="button">
				Add to Card
			</Button>
		</Wrapper>
	);
};

export default ProductCard;
