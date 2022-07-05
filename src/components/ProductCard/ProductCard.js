import React from "react";
import Wrapper from "./Wrapper";
import Button from "../Button/Button";
import { useCartContext } from "../../contexts/cartContext";
const ProductCard = ({ id, imageUrl, name, price }) => {
	const { addToCart } = useCartContext();
	//send object to cart with all values and add amount of 1 as default
	const addItemToCart = () => {
		addToCart({ id, imageUrl, name, price, amount: 1 });
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
