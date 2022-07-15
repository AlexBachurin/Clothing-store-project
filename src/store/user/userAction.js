import { USER_ACTION_TYPES } from "./userActionTypes";
import { createAction } from "../../utils/createAction";

export const setCurrentUser = (user) => {
	//will just create an object with passed action type and payload as user
	return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = () => {
	return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
};

export const googleSignInStart = () => {
	return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
};
export const emailSignInStart = (email, password) => {
	return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
		email,
		password,
	});
};

export const signInSuccess = (user) => {
	return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
};
export const signInFailure = (error) => {
	return createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);
};

export const emailSignUpStart = (email, password, displayName) => {
	return createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, {
		email,
		password,
		displayName,
	});
};
