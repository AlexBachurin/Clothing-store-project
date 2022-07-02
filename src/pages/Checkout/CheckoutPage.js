import React from "react";
import { useCartContext } from "../../contexts/cartContext";
import "./checkout.styles.scss";

const CheckoutPage = () => {
	const { cartItems } = useCartContext();
	return (
		<div>
			<h1>Checkout page</h1>
			<div>
				{cartItems.map((item) => {
					const { id, name, imageUrl, amount, price } = item;
					return (
						<div key={id}>
							<h2>{name}</h2>
							<span>{amount}</span>
							<button>dec</button>
							<button>inc</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CheckoutPage;
