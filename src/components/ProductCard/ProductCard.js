import React from "react";
import "./productCard.styles.scss";
import Button from "../Button/Button";
const ProductCard = ({ id, imageUrl, name, price }) => {
	return (
		<div className="product-card-container">
			<img src={imageUrl} alt={name} />
			<div className="footer">
				<span className="name">{name}</span>
				<span className="price">{price}$</span>
			</div>
			<Button buttonType="inverted" type="button">
				Add to Card
			</Button>
		</div>
	);
};

export default ProductCard;
