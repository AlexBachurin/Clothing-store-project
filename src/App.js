import "./App.css";
import CategoryItem from "./components/CategoryItem/CategoryItem";
import categories from "./utils/categories.json";
function App() {
	return (
		<div className="categories-container">
			{categories.map((category) => {
				// const { id, title, imageUrl } = category;
				return <CategoryItem key={category.id} {...category} />;
			})}
		</div>
	);
}

export default App;
