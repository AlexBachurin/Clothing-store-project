import React from "react";
import CategoryPreview from "../../components/CategoryPreview/CategoryPreview";
import Wrapper from "./Wrapper";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
const CategoriesPreview = () => {
	const { categories, isLoading } = useSelector((store) => store.categories);

	return (
		<Wrapper>
			{
				// use object keys to get the title from categories object
				//and pass to CategoryPreview component title and associated products with this title
				isLoading ? (
					<Spinner />
				) : (
					Object.keys(categories).map((title) => {
						return (
							<CategoryPreview
								key={title}
								title={title}
								products={categories[title]}
							/>
						);
					})
				)
			}
		</Wrapper>
	);
};

export default CategoriesPreview;
