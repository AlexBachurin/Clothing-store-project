import { createAction } from "../../utils/reducerUtils";
import {
	AddToCart,
	CalculateTotalItems,
	CalculateTotalPrice,
	DeleteItemFromCart,
	OpenCart,
	SetIsCartOpen,
	ToggleAmount,
} from "./ActionTypes";
import { CartItem, CART_ACTION_TYPES } from "./cartTypes";

//toggle open cart
export const openCart = (): OpenCart => {
	return createAction(CART_ACTION_TYPES.OPEN_CART);
};
//open cart with provided value
export const setIsCartOpen = (bool: boolean): SetIsCartOpen => {
	return createAction(CART_ACTION_TYPES.SET_OPEN_CART, bool);
};
//add item to cart
export const addToCart = (item: CartItem): AddToCart => {
	return createAction(CART_ACTION_TYPES.ADD_TO_CART, item);
};

//delete item from cart
export const deleteItemFromCart = (id: number): DeleteItemFromCart => {
	return createAction(CART_ACTION_TYPES.DELETE_FROM_CART, id);
};

//increment/decrement amount in cart
export const toggleAmount = (id: number, type: string): ToggleAmount => {
	return createAction(CART_ACTION_TYPES.TOGGLE_AMOUNT, {
		id: id,
		operation: type,
	});
};
//calculate total items
export const calculateTotalItems = (): CalculateTotalItems => {
	return createAction(CART_ACTION_TYPES.CALCULATE_TOTAL_ITEMS);
};
//calculate total price
export const calculateTotalPrice = (): CalculateTotalPrice => {
	return createAction(CART_ACTION_TYPES.CALCULATE_TOTAL_PRICE);
};
