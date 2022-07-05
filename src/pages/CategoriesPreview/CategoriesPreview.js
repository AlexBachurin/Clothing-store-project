import React from "react";
import { useCategoriesContext } from "../../contexts/categoriesContext";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import Wrapper from "./Wrapper";
const CategoriesPreview = () => {
	const { categories } = useCategoriesContext();

	return (
		<Wrapper>
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
		</Wrapper>
	);
};

export default CategoriesPreview;
