import "./App.css";
import Home from "./pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./pages/Navigation/Navigation";
function App() {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
			</Route>
		</Routes>
	);
}

export default App;
