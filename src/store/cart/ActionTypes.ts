import { Action, ActionWithPayload } from "../../utils/reducerUtils";
import { CartItem, CART_ACTION_TYPES, TogglePayload } from "./cartTypes";

//types
export type OpenCart = Action<CART_ACTION_TYPES.OPEN_CART>;

export type SetIsCartOpen = ActionWithPayload<
	CART_ACTION_TYPES.SET_OPEN_CART,
	boolean
>;

export type AddToCart = ActionWithPayload<
	CART_ACTION_TYPES.ADD_TO_CART,
	CartItem
>;

export type DeleteItemFromCart = ActionWithPayload<
	CART_ACTION_TYPES.DELETE_FROM_CART,
	number
>;

export type ToggleAmount = ActionWithPayload<
	CART_ACTION_TYPES.TOGGLE_AMOUNT,
	TogglePayload
>;

export type CalculateTotalItems =
	Action<CART_ACTION_TYPES.CALCULATE_TOTAL_ITEMS>;

export type CalculateTotalPrice =
	Action<CART_ACTION_TYPES.CALCULATE_TOTAL_PRICE>;

export type CartAction =
	| OpenCart
	| SetIsCartOpen
	| AddToCart
	| DeleteItemFromCart
	| ToggleAmount
	| CalculateTotalPrice
	| CalculateTotalItems;
