export enum USER_ACTION_TYPES {
	SET_CURRENT_USER = "SET_CURRENT_USER",
	CHECK_USER_SESSION = "CHECK_USER_SESSION",
	GOOGLE_SIGN_IN_START = "GOOGLE_SIGN_IN_START",
	EMAIL_SIGN_IN_START = "EMAIL_SIGN_IN_START",
	EMAIL_SIGN_UP_START = "EMAIL_SIGN_UP_START",
	SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS",
	SIGN_IN_FAILURE = "SIGN_IN_FAILURE",
	SIGN_OUT_START = "SIGN_OUT_START",
	SIGN_OUT_SUCCESS = "SIGN_OUT_SUCCESS",
	SIGN_OUT_FAILURE = "SIGN_OUT_FAILURE",
}

export type UserData = {
	createdAt: Date;
	displayName: string;
	email: string;
};

export type SignInData = {
	email: string;
	password: string;
};

export type SignUpData = {
	email: string;
	password: string;
	displayName: string;
};
