import { Action } from "redux";
import { ActionWithPayload } from "../../utils/reducerUtils";
import { CATEGORIES_ACTION_TYPES, CategoryMap } from "./categoriesTypes";

export type FetchCategoriesStart =
	Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START>;

export type FetchCategoriesSuccess = ActionWithPayload<
	CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
	CategoryMap
>;

export type FetchCategoriesRejected = ActionWithPayload<
	CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REJECTED,
	Error
>;

export type CategoryAction =
	| FetchCategoriesStart
	| FetchCategoriesSuccess
	| FetchCategoriesRejected;
