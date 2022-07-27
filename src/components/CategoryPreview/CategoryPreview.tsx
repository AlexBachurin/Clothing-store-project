import React, { FC } from "react";
import { Link } from "react-router-dom";
import { CategoryItem } from "../../store/categories/categoriesTypes";
import ProductCard from "../ProductCard/ProductCard";
import Wrapper from "./Wrapper";

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
};

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
	return (
		<Wrapper>
			<h2>
				<Link to={`${title}`}>
					<span className="title">{title.toUpperCase()}</span>
				</Link>
			</h2>
			{/* display only 4 products for each category */}
			<div className="products">
				{products
					.map((product) => {
						return <ProductCard key={product.id} product={product} />;
					})
					.slice(0, 4)}
			</div>
		</Wrapper>
	);
};

export default CategoryPreview;
