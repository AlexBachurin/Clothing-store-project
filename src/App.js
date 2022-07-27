import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation";
import ShopPage from "./pages/Shop/ShopPage";
import HomePage from "./pages/Home/HomePage";
import AuthenticationPage from "./pages/Authentication/AuthenticationPage";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import ErrorPage from "./pages/Error/ErrorPage";
import { useEffect } from "react";

import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";

import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "./store/user/userAction";
import {
	calculateTotalItems,
	calculateTotalPrice,
} from "./store/cart/cartAction";

function App() {
	const dispatch = useDispatch();

	const { cartItems } = useSelector((store) => store.cart);

	useEffect(() => {
		// //listen to auth change
		// const unsubscribe = onAuthStateChangedListener((user) => {
		// 	if (user) {
		// 		createUserDocumentFromAuth(user);
		// 	}
		// 	dispatch(setCurrentUser(user));
		// });

		// //unsubscribe from listener every time component unmounts
		// return unsubscribe;
		dispatch(checkUserSession());
	}, []);

	useEffect(() => {
		dispatch(calculateTotalItems());
		dispatch(calculateTotalPrice());
	}, [cartItems, dispatch]);
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<HomePage />} />
				<Route path="/shop/*" element={<ShopPage />} />
				<Route
					path="/auth"
					element={
						<ProtectedRoute>
							<AuthenticationPage />
						</ProtectedRoute>
					}
				></Route>
				<Route path="/checkout" element={<CheckoutPage />} />
			</Route>
			<Route path="*" element={<ErrorPage />} />
		</Routes>
	);
}

export default App;
