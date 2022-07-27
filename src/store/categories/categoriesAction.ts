import { CATEGORIES_ACTION_TYPES, CategoryMap } from "./categoriesTypes";
import { createAction, withMatcher } from "../../utils/reducerUtils";
import {
	FetchCategoriesStart,
	FetchCategoriesSuccess,
	FetchCategoriesRejected,
} from "./ActionTypes";

export const fetchCategoriesStart = withMatcher((): FetchCategoriesStart => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
});

export const fetchCategoriesSuccess = withMatcher(
	(categoriesObj: CategoryMap): FetchCategoriesSuccess => {
		return createAction(
			CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
			categoriesObj
		);
	}
);

export const fetchCategoriesRejected = withMatcher(
	(error: Error): FetchCategoriesRejected => {
		return createAction(
			CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REJECTED,
			error
		);
	}
);
