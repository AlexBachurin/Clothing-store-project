import { UserActionTypes } from "./ActionTypes";
import { UserData, USER_ACTION_TYPES } from "./userTypes";

export type UserState = {
	currentUser: UserData | null;
	isLoading: boolean;
	error: Error | null;
};
export const initialState: UserState = {
	currentUser: null,
	isLoading: false,
	error: null,
};

export const userReducer = (
	state = initialState,
	action: UserActionTypes
): UserState => {
	switch (action.type) {
		case USER_ACTION_TYPES.SIGN_IN_SUCCESS:
			return {
				...state,
				currentUser: { ...action.payload },
			};
		case USER_ACTION_TYPES.SIGN_IN_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		case USER_ACTION_TYPES.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
			};
		case USER_ACTION_TYPES.SIGN_OUT_FAILURE:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};
