import React from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./categoryPreview.styles.scss";
const CategoryPreview = ({ title, products }) => {
	return (
		<div className="category-preview-container">
			<h2>
				<span className="title">{title.toUpperCase()}</span>
			</h2>
			{/* display only 4 products for each category */}
			<div className="products">
				{products
					.map((product) => {
						return <ProductCard key={product.id} {...product} />;
					})
					.slice(0, 4)}
			</div>
		</div>
	);
};

export default CategoryPreview;
