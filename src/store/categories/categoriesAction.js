import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";
import { createAction } from "../../utils/createAction";

export const setCategories = (categories) => {
	//will just create an object with passed action type and payload as user
	return createAction(CATEGORIES_ACTION_TYPES.SET_CATEGORIES, categories);
};
