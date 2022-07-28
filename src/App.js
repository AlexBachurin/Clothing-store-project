import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import ProtectedRoute from "./pages/ProtectedRoute/ProtectedRoute";
import { useDispatch, useSelector } from "react-redux";
import { checkUserSession } from "./store/user/userAction";
import {
	calculateTotalItems,
	calculateTotalPrice,
} from "./store/cart/cartAction";
import Spinner from "./components/Spinner/Spinner";

const HomePage = lazy(() => import("./pages/Home/HomePage"));
const AuthenticationPage = lazy(() =>
	import("./pages/Authentication/AuthenticationPage")
);
const CheckoutPage = lazy(() => import("./pages/Checkout/CheckoutPage"));
const ShopPage = lazy(() => import("./pages/Shop/ShopPage"));
const ErrorPage = lazy(() => import("./pages/Error/ErrorPage"));
const Navigation = lazy(() => import("./pages/Navigation/Navigation"));

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
		<Suspense fallback={<Spinner />}>
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
		</Suspense>
	);
}

export default App;
