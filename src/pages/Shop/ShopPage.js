import React from "react";
import "./shopPage.styles.scss";
import { useCategoriesContext } from "../../contexts/categoriesContext";
import ProductCard from "../../components/ProductCard/ProductCard";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";

const ShopPage = () => {
	const { categories } = useCategoriesContext();

	return (
		<div className="shop-container">
			{
				// use object keys to get the title from categories object
				//and pass to CategoryPreview component title and associated products with this title
				Object.keys(categories).map((title) => {
					return (
						<CategoryPreview
							key={title}
							title={title}
							products={categories[title]}
						/>
					);
				})
			}
		</div>
	);
};

export default ShopPage;
