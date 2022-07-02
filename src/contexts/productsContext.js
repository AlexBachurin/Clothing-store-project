import React, { useState, useEffect, useContext } from "react";
import SHOP_DATA from "../utils/shopData.json";

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
	const [products, setProducts] = useState(SHOP_DATA);

	useEffect(() => {
		console.log(products);
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
