import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Routes, Route } from "react-router-dom";

import {
	fetchCategoriesAsyncThunk,
	setCategories,
} from "../../store/categories/categoriesAction";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
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
		dispatch(fetchCategoriesAsyncThunk());
	}, []);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":categoryName" element={<CategoryPage />} />
		</Routes>
	);
};

export default ShopPage;
