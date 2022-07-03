import React, { useState, useEffect, useContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";
import SHOP_DATA from "../utils/shop-data.js";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		//get categories from db, since it async wrap it in internal function
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
		};
		//then call it
		getCategoriesMap();
	}, []);
	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};

//global hook
export const useProductsContext = () => {
	return useContext(ProductsContext);
};
