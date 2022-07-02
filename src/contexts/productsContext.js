import React, { useState, useEffect, useContext } from "react";
import PRODUCTS_DATA from "../utils/shopData.json";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(PRODUCTS_DATA);
	const [isCartOpen, setIsCartOpen] = useState(false);

	const openCart = () => {
		setIsCartOpen(!isCartOpen);
	};
	useEffect(() => {
		console.log(products);
	});
	return (
		<ProductsContext.Provider
			value={{
				products,
				setProducts,
				isCartOpen,
				openCart,
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