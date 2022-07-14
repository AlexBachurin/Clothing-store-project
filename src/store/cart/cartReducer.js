import { CART_ACTION_TYPES } from "./cartActionTypes";

const initialState = {
	isCartOpen: false,
	cartItems: [],
	cartCount: 0,
	cartTotal: 0,
};

export const cartReducer = (state = initialState, action) => {
	const { type, payload } = action;
	switch (type) {
		//toggle open cart
		case CART_ACTION_TYPES.OPEN_CART:
			return { ...state, isCartOpen: !state.isCartOpen };
		//set open cart with provided payload(boolean)
		case CART_ACTION_TYPES.SET_OPEN_CART:
			return { ...state, isCartOpen: payload };
		//add to cart, payload provided is item object
		case CART_ACTION_TYPES.ADD_TO_CART:
			//check if cart already have item with same id
			const findItemById = state.cartItems.find((item) => {
				return item.id === payload.id;
			});
			//if found  then increase amount of this item
			if (findItemById) {
				const newCartItems = state.cartItems.map((item) => {
					if (item.id === payload.id) {
						return { ...item, amount: item.amount + 1 };
					}
					return item;
				});
				//return modified array
				return { ...state, cartItems: newCartItems };
			}
			//else set new item to existing cart items array
			else {
				return { ...state, cartItems: [...state.cartItems, payload] };
			}
		// DELETE FROM CART, payload - id of item
		case CART_ACTION_TYPES.DELETE_FROM_CART:
			//filter through cartItems and return new array without item with delete id
			const newCartItems = state.cartItems.filter((item) => {
				return item.id !== payload;
			});
			return { ...state, cartItems: newCartItems };
		// TOGGLE AMOUNT, payload is object {id, operation type}
		case CART_ACTION_TYPES.TOGGLE_AMOUNT:
			const { id, operation } = payload;
			//find item to operate by id
			const findItemByID = state.cartItems.find((item) => item.id === id);
			//if amount is 1, then delete item on decrement
			if (findItemByID.amount === 1 && operation === "dec") {
				const newCartItems = state.cartItems.filter((item) => {
					return item.id !== id;
				});
				return { ...state, cartItems: newCartItems };
			}
			//else return filtered array
			else {
				const newCartItems = state.cartItems.map((item) => {
					//find item by id to toggle amount
					if (item.id === id) {
						//check operation type
						if (operation === "dec") {
							return { ...item, amount: item.amount - 1 };
						} else if (operation === "inc") {
							return { ...item, amount: item.amount + 1 };
						}
					}
					//return rest items as it is
					return item;
				});
				//return new filtered array
				return { ...state, cartItems: newCartItems };
			}
		//CALCULATE TOTAL ITEMS IN CART
		case CART_ACTION_TYPES.CALCULATE_TOTAL_ITEMS:
			//calculate total by adding each item amount to accumulator
			const newCartCount = state.cartItems.reduce((acc, curItem) => {
				let newAmount = acc + curItem.amount;
				return newAmount;
			}, 0);
			return { ...state, cartCount: newCartCount };
		//CALCULATE TOTAL PRICE
		case CART_ACTION_TYPES.CALCULATE_TOTAL_PRICE:
			//calculate total price by multiplying each item amount on its price
			const newCartPrice = state.cartItems.reduce((acc, curItem) => {
				let newPrice = acc + curItem.price * curItem.amount;
				return newPrice;
			}, 0);
			return { ...state, cartTotal: newCartPrice };
		default:
			return state;
	}
};
