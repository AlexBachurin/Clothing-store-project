import { USER_ACTION_TYPES } from "./userActionTypes";
import { createAction } from "../../utils/createAction";

export const setCurrentUser = (user) => {
	//will just create an object with passed action type and payload as user
	return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};
