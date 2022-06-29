import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation";
import ShopPage from "./pages/Shop/ShopPage";
import SignInPage from "./pages/SignIn/SignInPage";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="/shop" element={<ShopPage />} />
				<Route path="/sign-in" element={<SignInPage />} />
			</Route>
		</Routes>
	);
}

export default App;
