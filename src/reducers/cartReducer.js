import { CART_ACTION_TYPES } from "../actions/cartActions";

const cartReducer = (state, action) => {
	const { type, payload } = action;

	switch (type) {
		//toggle open cart
		case CART_ACTION_TYPES.OPEN_CART:
			return {
				...state,
				isCartOpen: !state.isCartOpen,
			};

		//set open cart with provided payload(boolean)
		case CART_ACTION_TYPES.SET_OPEN_CART:
			return {
				...state,
				isCartOpen: payload,
			};

		//add to cart, payload provided is item object
		case CART_ACTION_TYPES.ADD_TO_CART:
			//check if cart already have item with same id
			const findSamePos = state.cartItems.find((cartItem) => {
				return cartItem.id === payload.id;
			});
			//if found  then increase amount of this item
			if (findSamePos) {
				const newArr = state.cartItems.map((cartItem) => {
					if (cartItem.id === payload.id) {
						return { ...cartItem, amount: cartItem.amount + 1 };
					}
					return cartItem;
				});
				//return modified array
				return {
					...state,
					cartItems: newArr,
				};
			}
			//else set new item to existing cart items array
			else {
				return {
					...state,
					cartItems: [...state.cartItems, payload],
				};
			}

		// DELETE FROM CART, payload - id of item
		case CART_ACTION_TYPES.DELETE_FROM_CART:
			//find item to delete in cart by id and remove it with help of filter method
			const newArr = state.cartItems.filter((item) => {
				return item.id !== payload;
			});
			return {
				...state,
				cartItems: newArr,
			};
		// TOGGLE AMOUNT, payload is object {id, operation type}
		case CART_ACTION_TYPES.TOGGLE_AMOUNT:
			const { id, operation } = payload;
			//find item to operate by id
			const findItem = state.cartItems.find((cartItem) => cartItem.id === id);
			//if amount is 1, then delete item on decrement
			if (findItem.amount === 1 && operation === "dec") {
				console.log("delete");
				const newArr = state.cartItems.filter((item) => {
					return item.id !== id;
				});
				return {
					...state,
					cartItems: newArr,
				};
				//else return filtered array
			} else {
				const newArr = state.cartItems.map((cartItem) => {
					//find item to operate by id
					if (cartItem.id === id) {
						//check type
						if (operation === "dec") {
							return { ...cartItem, amount: cartItem.amount - 1 };
						}
						// or just increase
						if (operation === "inc") {
							return { ...cartItem, amount: cartItem.amount + 1 };
						}
					}
					return cartItem;
				});
				//return new filtered array
				return {
					...state,
					cartItems: newArr,
				};
			}
		//CALCULATE TOTAL ITEMS IN CART
		case CART_ACTION_TYPES.CALCULATE_TOTAL_ITEMS:
			const newCartCount = state.cartItems.reduce((total, cartItem) => {
				return total + cartItem.amount;
			}, 0);
			return {
				...state,
				cartCount: newCartCount,
			};
		//CALCULATE TOTAL PRICE
		case CART_ACTION_TYPES.CALCULATE_TOTAL_PRICE:
			const newCartTotal = state.cartItems.reduce((total, cartItem) => {
				return total + cartItem.amount * cartItem.price;
			}, 0);
			return {
				...state,
				cartTotal: newCartTotal,
			};
		default:
			throw new Error(`Unhandled action type ${type} in cartReducer`);
	}
};

export default cartReducer;
