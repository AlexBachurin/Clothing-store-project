import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";
import { createAction } from "../../utils/createAction";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";

export const setCategories = (categories) => {
	//will just create an object with passed action type and payload as user
	return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
};

export const fetchCategoriesStart = () => {
	return createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START);
};

export const fetchCategoriesSuccess = (categoriesObj) => {
	return createAction(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_SUCCESS,
		categoriesObj
	);
};

export const fetchCategoriesRejected = (error) => {
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
