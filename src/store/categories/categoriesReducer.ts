import { CategoryMap } from "./categoriesTypes";
import {
	fetchCategoriesRejected,
	fetchCategoriesStart,
	fetchCategoriesSuccess,
} from "./categoriesAction";
import { AnyAction } from "redux";
export type CategoriesState = {
	readonly categories: CategoryMap;
	readonly isLoading: boolean;
	readonly error: Error | null;
};

export const initialState: CategoriesState = {
	categories: {},
	isLoading: false,
	error: null,
};

export const categoriesReducer = (
	state = initialState,
	action = {} as AnyAction
): CategoriesState => {
	if (fetchCategoriesStart.match(action)) {
		return { ...state, isLoading: true };
	} else if (fetchCategoriesSuccess.match(action)) {
		return { ...state, categories: action.payload, isLoading: false };
	} else if (fetchCategoriesRejected.match(action)) {
		return { ...state, isLoading: false, error: action.payload };
	} else {
		return state;
	}
};
