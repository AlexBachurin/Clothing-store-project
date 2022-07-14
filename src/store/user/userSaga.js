import { takeLatest, put, all, call } from "redux-saga/effects";
import {
	createUserDocumentFromAuth,
	getCurrentUser,
} from "../../utils/firebase/firebase";
import { signInFailure, signInSuccess } from "./userAction";
import { USER_ACTION_TYPES } from "./userActionTypes";

export function* getSnapshotFromUserAuth(userAuth) {
	try {
		//get snapshot of user from firebase or create new if user doesnt exist
		const userSnapshot = yield call(createUserDocumentFromAuth, userAuth);
		//sign in with success
		yield put(signInSuccess({ id: userSnapshot.id, ...userSnapshot.data }));
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* isUserAuthenticated() {
	try {
		//if successfull we will get back user object
		const userAuth = yield call(getCurrentUser);
		// if no user or user is null just return
		if (!userAuth) return;
		yield call(getSnapshotFromUserAuth, userAuth);
	} catch (error) {
		yield put(signInFailure(error));
	}
}

export function* onCheckUserSession() {
	yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* userSagas() {
	yield all([call(onCheckUserSession)]);
}
