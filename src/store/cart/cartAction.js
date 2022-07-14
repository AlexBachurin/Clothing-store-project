import { createAction } from "../../utils/createAction";
import { CART_ACTION_TYPES } from "./cartActionTypes";

//toggle open cart
export const openCart = () => {
	return createAction(CART_ACTION_TYPES.OPEN_CART);
};
//open cart with provided value
export const setIsCartOpen = (bool) => {
	return createAction(CART_ACTION_TYPES.SET_OPEN_CART, bool);
};
//add item to cart
export const addToCart = (item) => {
	return createAction(CART_ACTION_TYPES.ADD_TO_CART, item);
};

//delete item from cart
export const deleteItemFromCart = (id) => {
	return createAction(CART_ACTION_TYPES.DELETE_FROM_CART, id);
};

//increment/decrement amount in cart
export const toggleAmount = (id, type) => {
	return createAction(CART_ACTION_TYPES.TOGGLE_AMOUNT, {
		id: id,
		operation: type,
	});
};
//calculate total items
export const calculateTotalItems = () => {
	return createAction(CART_ACTION_TYPES.CALCULATE_TOTAL_ITEMS);
};
//calculate total price
export const calculateTotalPrice = () => {
	return createAction(CART_ACTION_TYPES.CALCULATE_TOTAL_PRICE);
};
