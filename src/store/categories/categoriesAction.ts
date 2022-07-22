import {
	CATEGORIES_ACTION_TYPES,
	Category,
	CategoryMap,
} from "./categoriesTypes";
import {
	createAction,
	Action,
	ActionWithPayload,
} from "../../utils/reducerUtils";

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

export const fetchCategoriesStart = (): FetchCategoriesStart => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (
	categoriesObj: CategoryMap
): FetchCategoriesSuccess => {
	return createAction(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
		categoriesObj
	);
};

export const fetchCategoriesRejected = (
	error: Error
): FetchCategoriesRejected => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_REJECTED, error);
};

// export const fetchCategoriesAsyncThunk = () => {
// 	return async (dispatch) => {
// 		dispatch(fetchCategoriesStart());
// 		try {
// 			const categoriesObj = await getCategoriesAndDocuments("categories");
// 			dispatch(fetchCategoriesSuccess(categoriesObj));
// 		} catch (error) {
// 			dispatch(fetchCategoriesRejected(error));
// 		}
// 	};
// };
