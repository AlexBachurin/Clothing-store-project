import React from "react";
import CategoryItem from "../CategoryItem/CategoryItem";
import categories from "../../utils/categories.json";
import Wrapper from "./Wrapper";

const CategoryMenuContainer = () => {
	return (
		<Wrapper className="categories-container">
			{categories.map((category) => {
				// const { id, title, imageUrl } = category;
				return <CategoryItem key={category.id} {...category} />;
			})}
		</Wrapper>
	);
};

export default CategoryMenuContainer;
