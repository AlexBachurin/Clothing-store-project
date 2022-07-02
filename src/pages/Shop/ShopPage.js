import React from "react";
import "./shopPage.styles.scss";
import { useProductsContext } from "../../contexts/productsContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const ShopPage = () => {
	const { products } = useProductsContext();
	return (
		<div className="products-container">
			{products.map((item) => {
				return <ProductCard key={item.id} {...item} />;
			})}
		</div>
	);
};

export default ShopPage;
