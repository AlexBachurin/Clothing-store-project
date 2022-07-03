import React, { useState, useEffect, useContext } from "react";
import { addCollectionAndDocuments } from "../utils/firebase/firebase.js";
import SHOP_DATA from "../utils/shop-data.js";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState([]);
	//add new collection to db from internal file
	useEffect(() => {
		addCollectionAndDocuments("categories", SHOP_DATA);
	});

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
