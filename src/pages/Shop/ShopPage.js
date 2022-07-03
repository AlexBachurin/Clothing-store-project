import React from "react";
import "./shopPage.styles.scss";
import { useCategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";

const ShopPage = () => {
	const { categories } = useCategoriesContext();
	console.log(Object.values(categories));
	return (
		<>
			{
				// use object keys to get the title from categories object
				Object.keys(categories).map((title) => {
					return (
						<div key={title}>
							<h2>{title}</h2>
							<div className="products-container">
								{/* iterate through values using key name of object, since value of this will be array we can map through it */}
								{categories[title]
									.map((category) => {
										return <ProductCard key={category.id} {...category} />;
										// also slice it to 4 positions
									})
									.slice(0, 4)}
							</div>
						</div>
					);
				})
			}
		</>
	);
};

export default ShopPage;
