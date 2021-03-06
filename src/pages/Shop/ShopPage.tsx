import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import { fetchCategoriesStart } from "../../store/categories/categoriesAction";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import CategoryPage from "../Category/CategoryPage";
const ShopPage = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		//get categories from db, since it async wrap it in internal function
		// const getCategoriesMap = async () => {
		// 	const categoryMap = await getCategoriesAndDocuments();
		// 	dispatch(setCategories(categoryMap));
		// };
		// //then call it
		// getCategoriesMap();
		// dispatch(fetchCategoriesAsyncThunk());
		dispatch(fetchCategoriesStart());
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":categoryName" element={<CategoryPage />} />
		</Routes>
	);
};

export default ShopPage;
