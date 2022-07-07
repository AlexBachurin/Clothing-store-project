import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation";
import ShopPage from "./pages/Shop/ShopPage";
import HomePage from "./pages/Home/HomePage";
import AuthenticationPage from "./pages/Authentication/AuthenticationPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ErrorPage from "./pages/Error/ErrorPage";
import React, { useEffect } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "./utils/firebase/firebase";

import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user/userAction";

function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		//listen to auth change
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			dispatch(setCurrentUser(user));
		});

		//unsubscribe from listener every time component unmounts
		return unsubscribe;
	}, []);
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="/shop/*" element={<ShopPage />} />
				<Route path="/auth" element={<AuthenticationPage />} />
				<Route path="/checkout" element={<CheckoutPage />} />
			</Route>
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}

export default App;
