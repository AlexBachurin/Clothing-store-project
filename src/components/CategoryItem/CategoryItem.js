import Wrapper from "./Wrapper";

const CategoryItem = ({ title, imageUrl }) => {
	return (
		<Wrapper imageUrl={imageUrl}>
			<div className="background-image" />
			<div className="category-body-container">
				<h2>{title}</h2>
				<p>Shop Now</p>
			</div>
		</Wrapper>
	);
};

export default CategoryItem;
