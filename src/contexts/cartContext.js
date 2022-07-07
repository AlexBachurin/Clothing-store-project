import React, { useContext, useEffect, useReducer } from "react";
import cartReducer from "../reducers/cartReducer";
import { CART_ACTION_TYPES } from "../actions/cartActions";
const CartContext = React.createContext();

const initialState = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

export const CartProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);

	//toggle open cart
	const openCart = () => {
		dispatch({ type: CART_ACTION_TYPES.OPEN_CART });
	};
	//open cart with provided value
	const setIsCartOpen = (bool) => {
		dispatch({ type: CART_ACTION_TYPES.SET_OPEN_CART, payload: bool });
	};
	//add item to cart
	const addToCart = (item) => {
		dispatch({ type: CART_ACTION_TYPES.ADD_TO_CART, payload: item });
		//also open cart by default then trying to add item to cart
		setIsCartOpen(true);
	};

	//delete item from cart
	const deleteItemFromCart = (id) => {
		//find item to delete in cart by id and remove it with help of filter method
		dispatch({ type: CART_ACTION_TYPES.DELETE_FROM_CART, payload: id });
	};

	//increment/decrement amount in cart
	const toggleAmount = (id, type) => {
		dispatch({
			type: CART_ACTION_TYPES.TOGGLE_AMOUNT,
			payload: { id: id, operation: type },
		});
	};

	//CALCULATE TOTAL ITEMS AND TOTAL PRICE
	useEffect(() => {
		dispatch({ type: CART_ACTION_TYPES.CALCULATE_TOTAL_ITEMS });
		dispatch({ type: CART_ACTION_TYPES.CALCULATE_TOTAL_PRICE });
	}, [state.cartItems]);

	return (
		<CartContext.Provider
			value={{
				...state,
				openCart,
				setIsCartOpen,
				addToCart,
				deleteItemFromCart,
				toggleAmount,
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
