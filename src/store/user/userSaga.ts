import { User } from "firebase/auth";
import { takeLatest, put, all, call } from "typed-redux-saga/macro";
import {
	createAuthUserWithEmailAndPassword,
	createUserDocumentFromAuth,
	getCurrentUser,
	loginWithEmailAndPassword,
	signInWithGooglePopup,
	signOutUser,
} from "../../utils/firebase/firebase";
import { EmailSignInStart, EmailSignUpStart } from "./ActionTypes";
import {
	signInFailure,
	signInSuccess,
	signOutFailure,
	signOutSuccess,
} from "./userAction";
import { USER_ACTION_TYPES } from "./userTypes";

export function* getSnapshotFromUserAuth(userAuth: User) {
	try {
		//get snapshot of user from firebase or create new if user doesnt exist
		const userSnapshot = yield* call(createUserDocumentFromAuth, userAuth);
		//sign in with success
		if (userSnapshot) {
			yield* put(
				signInSuccess({ id: userSnapshot.id, ...userSnapshot.data() })
			);
		}
	} catch (error) {
		yield* put(signInFailure(error as Error));
	}
}

export function* isUserAuthenticated() {
	try {
		//if successfull we will get back user object
		const userAuth = yield* call(getCurrentUser);
		// if no user or user is null just return
		if (!userAuth) return;
		yield* call(getSnapshotFromUserAuth, userAuth);
	} catch (error) {
		yield* put(signInFailure(error as Error));
	}
}

export function* signInWithGoogle() {
	try {
		const { user } = yield* call(signInWithGooglePopup);
		yield* call(getSnapshotFromUserAuth, user);
	} catch (error) {
		yield* put(signInFailure(error as Error));
		alert(error);
	}
}
export function* signInWithEmailPassword({ payload }: EmailSignInStart) {
	const { email, password } = payload;
	try {
		const userCredential = yield* call(
			loginWithEmailAndPassword,
			email,
			password
		);
		if (userCredential) {
			const { user } = userCredential;
			yield call(getSnapshotFromUserAuth, user);
		}
	} catch (error) {
		yield put(signInFailure(error as Error));
		alert(error);
	}
}

export function* emailSignUp({ payload }: EmailSignUpStart) {
	const { email, password, displayName } = payload;
	try {
		const userCredential = yield* call(
			createAuthUserWithEmailAndPassword,
			email,
			password
		);
		if (userCredential) {
			const { user } = userCredential;
			yield* call(getSnapshotFromUserAuth, user);
		}
	} catch (error) {
		yield* put(signInFailure(error as Error));
		alert(error);
	}
}

export function* signOut() {
	try {
		yield* call(signOutUser);
		yield* put(signOutSuccess());
	} catch (error) {
		yield* put(signOutFailure(error as Error));
	}
}

//EMAIL LOGIN
export function* onEmailSignInStart() {
	yield takeLatest(
		USER_ACTION_TYPES.EMAIL_SIGN_IN_START,
		signInWithEmailPassword
	);
}
//GOOGLE LOGIN
export function* onGoogleSignInStart() {
	yield takeLatest(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START, signInWithGoogle);
}
// AUTH LISTENER
export function* onCheckUserSession() {
	yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION, isUserAuthenticated);
}
//SIGN UP EMAIL PASSWORD
export function* onEmailSignUpStart() {
	yield takeLatest(USER_ACTION_TYPES.EMAIL_SIGN_UP_START, emailSignUp);
}

//SIGN OUT
export function* onSignOutStart() {
	yield takeLatest(USER_ACTION_TYPES.SIGN_OUT_START, signOut);
}

export function* userSagas() {
	yield all([
		call(onCheckUserSession),
		call(onGoogleSignInStart),
		call(onEmailSignInStart),
		call(onEmailSignUpStart),
		call(onSignOutStart),
	]);
}
