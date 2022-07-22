import { createAction } from "../../utils/reducerUtils";
import {
	SetCurrentUser,
	CheckUserSession,
	GoogleSignInStart,
	EmailSignInStart,
	SignInSuccess,
	SignInFailure,
	EmailSignUpStart,
	SignOutStart,
	SignOutSuccess,
	SignOutFailure,
} from "./ActionTypes";
import { UserData, USER_ACTION_TYPES } from "./userTypes";

export const setCurrentUser = (user: UserData): SetCurrentUser => {
	//will just create an object with passed action type and payload as user
	return createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
};

export const checkUserSession = (): CheckUserSession => {
	return createAction(USER_ACTION_TYPES.CHECK_USER_SESSION);
};

export const googleSignInStart = (): GoogleSignInStart => {
	return createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START);
};
export const emailSignInStart = (
	email: string,
	password: string
): EmailSignInStart => {
	return createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START, {
		email,
		password,
	});
};

export const signInSuccess = (
	user: UserData & { id: string }
): SignInSuccess => {
	return createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS, user);
};
export const signInFailure = (error: Error): SignInFailure => {
	return createAction(USER_ACTION_TYPES.SIGN_IN_FAILURE, error);
};

export const emailSignUpStart = (
	email: string,
	password: string,
	displayName: string
): EmailSignUpStart => {
	return createAction(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, {
		email,
		password,
		displayName,
	});
};

export const signOutStart = (): SignOutStart => {
	return createAction(USER_ACTION_TYPES.SIGN_OUT_START);
};

export const signOutSuccess = (): SignOutSuccess => {
	return createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS);
};

export const signOutFailure = (error: Error): SignOutFailure => {
	return createAction(USER_ACTION_TYPES.SIGN_OUT_FAILURE, error);
};
