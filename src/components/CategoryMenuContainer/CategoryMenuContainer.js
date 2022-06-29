import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import categories from "../../utils/categories.json";
import "./categoryMenuContainer.styles.scss";
const CategoryMenuContainer = () => {
	return (
		<div className="categories-container">
			{categories.map((category) => {
				// const { id, title, imageUrl } = category;
				return <CategoryItem key={category.id} {...category} />;
			})}
		</div>
	);
};

export default CategoryMenuContainer;
