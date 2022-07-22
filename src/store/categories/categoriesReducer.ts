import { CATEGORIES_ACTION_TYPES, CategoryMap } from "./categoriesTypes";
import { CategoryAction } from "./categoriesAction";

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
	action = {} as CategoryAction
) => {
	switch (action.type) {
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START:
			return { ...state, isLoading: true };
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS:
			return { ...state, categories: action.payload, isLoading: false };
		case CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REJECTED:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};
