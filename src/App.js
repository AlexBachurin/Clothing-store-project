import "./App.css";
import "./categories.styles.scss";
function App() {
	const categories = [
		{
			id: 1,
			title: "Hats",
			img: "",
		},
		{
			id: 2,
			title: "Jackets",
			img: "",
		},
		{
			id: 3,
			title: "Sneakers",
			img: "",
		},
		{
			id: 4,
			title: "Womens",
			img: "",
		},
		{
			id: 5,
			title: "Mens",
			img: "",
		},
	];

	return (
		<div className="categories-container">
			{categories.map((category) => {
				const { id, title, img } = category;
				return (
					<div key={id} className="category-container">
						<div className="background-image"></div>
						<div className="category-body-container">
							<h2>{title}</h2>
							<p>Shop Now</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}

export default App;
