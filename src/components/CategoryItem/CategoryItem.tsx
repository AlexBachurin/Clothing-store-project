import { FC } from "react";
import { Link } from "react-router-dom";
import Wrapper from "./Wrapper";

type CategoryItemProps = {
	title: string;
	imageUrl: string;
};

const CategoryItem: FC<CategoryItemProps> = ({ title, imageUrl }) => {
	return (
		<Wrapper imageUrl={imageUrl}>
			<div className="background-image" />
			<Link to={`shop/${title}`} className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</Link>
		</Wrapper>
	);
};

export default CategoryItem;
