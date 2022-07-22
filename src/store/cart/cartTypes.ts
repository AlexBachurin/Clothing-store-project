export enum CART_ACTION_TYPES {
	OPEN_CART = "OPEN_CART",
	ADD_TO_CART = "ADD_TO_CART",
	DELETE_FROM_CART = "DELETE_FROM_CART",
	TOGGLE_AMOUNT = "TOGGLE_AMOUNT",
	SET_OPEN_CART = "SET_OPEN_CART",
	CALCULATE_TOTAL_ITEMS = "CALCULATE_TOTAL_ITEMS",
	CALCULATE_TOTAL_PRICE = "CALCULATE_TOTAL_PRICE",
}

export type CartItem = {
	id: number;
	imageUrl: string;
	name: string;
	price: number;
	amount: number;
};

export type TogglePayload = {
	id: number;
	operation: string;
};
