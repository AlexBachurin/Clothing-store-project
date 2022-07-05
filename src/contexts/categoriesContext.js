import React, { useState, useEffect, useContext } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";
// import SHOP_DATA from "../utils/shop-data.js";

const CategoriesContext = React.createContext();

export const CategoriesProvider = ({ children }) => {
	const [categories, setCategories] = useState({});

	useEffect(() => {
		//get categories from db, since it async wrap it in internal function
		const getCategoriesMap = async () => {
			const categoryMap = await getCategoriesAndDocuments();
			console.log(categoryMap);
			setCategories(categoryMap);
		};
		//then call it
		getCategoriesMap();
	}, []);
	return (
		<CategoriesContext.Provider
			value={{
				categories,
				setCategories,
			}}
		>
			{children}
		</CategoriesContext.Provider>
	);
};

//global hook
export const useCategoriesContext = () => {
	return useContext(CategoriesContext);
};
