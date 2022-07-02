import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);

	const openCart = () => {
		setIsCartOpen(!isCartOpen);
	};
	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				openCart,
			}}
		>
			{children}
		</CartContext.Provider>
	);
};

//global hook
export const useCartContext = () => {
	return useContext(CartContext);
};
