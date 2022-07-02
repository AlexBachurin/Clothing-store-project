import React from "react";
import "./shopPage.styles.scss";
import { useProductsContext } from "../../contexts/productsContext";

const ShopPage = () => {
	const { products } = useProductsContext();
	return (
		<div>
			{products.map(({ id, name }) => {
				return (
					<div key={id}>
						<h1>{name}</h1>
					</div>
				);
			})}
		</div>
	);
};

export default ShopPage;
