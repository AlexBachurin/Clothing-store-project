import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

//Persistor to save cart state after reload
const persistConfig = {
	key: "root",
	storage,
	// blacklist user since we have onAuthStateChange listener and categories
	blacklist: ["user", "categories"],
	whitelist: ["cart"],
};

const sagaMiddleware = createSagaMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);

//helper thar runs before the action hits reducer
const middleWares = [
	process.env.NODE_ENV !== "production" && logger,
	// thunk,
	sagaMiddleware,
].filter(Boolean);

//devtools
const composeEhnancer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const composedEnhancers = composeEhnancer(applyMiddleware(...middleWares));
//pass middleWare as 3rd argument, so we pass second argument as undefined
export const store = createStore(persistedReducer, composedEnhancers);

//run
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
