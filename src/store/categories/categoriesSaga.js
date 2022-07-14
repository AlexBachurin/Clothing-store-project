import { takeLatest, all, call, put } from "redux-saga/effects";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase";
import {
	fetchCategoriesRejected,
	fetchCategoriesSuccess,
} from "./categoriesAction";
import { CATEGORIES_ACTION_TYPES } from "./categoriesActionTypes";

//helper function to do job when we call fetch categories
export function* fetchCategoriesAsync() {
	try {
		const categoriesObj = yield call(getCategoriesAndDocuments, "categories");
		yield put(fetchCategoriesSuccess(categoriesObj));
	} catch (error) {
		yield put(fetchCategoriesRejected(error));
	}
}

//listen to fetch categories start
export function* onCategoriesFetch() {
	yield takeLatest(
		CATEGORIES_ACTION_TYPES.FETCH_CATEGORIES_START,
		fetchCategoriesAsync
	);
}

export function* categoriesSaga() {
	yield all([call(onCategoriesFetch)]);
}
