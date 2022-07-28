import { useState, useEffect } from "react";
import Wrapper from "./Wrapper";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";
import { RootState } from "../../store/store";
import { CategoryItem } from "../../store/categories/categoriesTypes";

type CategoryPageParams = {
	categoryName: string;
};
const CategoryPage = () => {
	//get target url with clicked category name using useParams
	const { categoryName } = useParams<
		keyof CategoryPageParams
	>() as CategoryPageParams;
	const { categories, isLoading } = useSelector(
		(store: RootState) => store.categories
	);
	//state for storing products
	const [products, setProducts] = useState<CategoryItem[]>(
		categories[categoryName]
	);
	//every time categoryName or categories from db changes call useEffect to rerender page
	useEffect(() => {
		//set products array to appropriate category array name
		setProducts(categories[categoryName]);
	}, [categoryName, categories]);
	return (
		<Wrapper>
			<h2 className="category-title">{categoryName}</h2>
			{isLoading ? (
				<Spinner />
			) : (
				<div className="category-items-container">
					{products &&
						products.map((product) => {
							return <ProductCard key={product.id} product={product} />;
						})}
				</div>
			)}
		</Wrapper>
	);
};

export default CategoryPage;
