import React from "react";
import "./shopPage.styles.scss";
import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../CategoriesPreview/CategoriesPreview";
import CategoryPage from "../Category/CategoryPage";
const ShopPage = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=":categoryName" element={<CategoryPage />} />
		</Routes>
	);
};

export default ShopPage;
