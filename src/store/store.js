import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

const sagaMiddleware = createSagaMiddleware();

//helper thar runs before the action hits reducer
const middleWares = [
	process.env.NODE_ENV !== "production" && logger,
	sagaMiddleware,
].filter(Boolean);

//devtools
const composeEhnancer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const composedEnhancers = composeEhnancer(applyMiddleware(...middleWares));

//Persistor to save cart state after reload
const persistConfig = {
	key: "root",
	storage,
	// blacklist user since we have onAuthStateChange listener and categories
	blacklist: ["user"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
//pass middleWare as 3rd argument, so we pass second argument as undefined
export const store = createStore(
	persistedReducer,
	undefined,
	composedEnhancers
);

//run
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
