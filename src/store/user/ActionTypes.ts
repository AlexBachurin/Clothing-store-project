import { Action } from "redux";
import { ActionWithPayload } from "../../utils/reducerUtils";
import {
	USER_ACTION_TYPES,
	UserData,
	SignInData,
	SignUpData,
} from "./userTypes";

export type SetCurrentUser = ActionWithPayload<
	USER_ACTION_TYPES.SET_CURRENT_USER,
	UserData
>;

export type CheckUserSession = Action<USER_ACTION_TYPES.CHECK_USER_SESSION>;

export type GoogleSignInStart = Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>;

export type EmailSignInStart = ActionWithPayload<
	USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
	SignInData
>;

export type SignInSuccess = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_IN_SUCCESS,
	UserData
>;

export type SignInFailure = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_IN_FAILURE,
	Error
>;

export type EmailSignUpStart = ActionWithPayload<
	USER_ACTION_TYPES.EMAIL_SIGN_UP_START,
	SignUpData
>;

export type SignOutStart = Action<USER_ACTION_TYPES.SIGN_OUT_START>;

export type SignOutSuccess = Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>;

export type SignOutFailure = ActionWithPayload<
	USER_ACTION_TYPES.SIGN_OUT_FAILURE,
	Error
>;

export type UserActionTypes =
	| SetCurrentUser
	| CheckUserSession
	| GoogleSignInStart
	| EmailSignInStart
	| SignInSuccess
	| SignInFailure
	| SignOutStart
	| SignOutSuccess
	| SignOutFailure;
