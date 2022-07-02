import React, { useContext, useState } from "react";

const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
	const [isCartOpen, setIsCartOpen] = useState(false);
	const [cartItems, setCartItems] = useState([]);
	const openCart = () => {
		setIsCartOpen(!isCartOpen);
	};
	//add item to cart
	const addToCart = (item) => {
		//check if cart already have item with same id
		const findSamePos = cartItems.find((cartItem) => {
			return cartItem.id === item.id;
		});
		//if found  then increase amount of this item
		if (findSamePos) {
			const newArr = cartItems.map((cartItem) => {
				if (cartItem.id === item.id) {
					return { ...cartItem, amount: cartItem.amount + 1 };
				}
				return cartItem;
			});
			setCartItems([...newArr]);
		}
		//else set new item to cart items array
		else {
			setCartItems([...cartItems, item]);
		}
		//also open cart by default then trying to add item to cart
		setIsCartOpen(true);
	};
	//delete item from cart
	const deleteItemFromCart = (id) => {
		console.log(id);
		//find item to delete in cart by id and remove it with help of filter method
		const newArr = cartItems.filter((item) => {
			return item.id !== id;
		});
		setCartItems([...newArr]);
	};
	return (
		<CartContext.Provider
			value={{
				isCartOpen,
				openCart,
				addToCart,
				cartItems,
				deleteItemFromCart,
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
