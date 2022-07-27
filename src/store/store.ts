import { compose, createStore, applyMiddleware, Middleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./root-saga";

//interface for global window obj
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
	}
}

const sagaMiddleware = createSagaMiddleware();

//helper thar runs before the action hits reducer
const middleWares = [
	process.env.NODE_ENV !== "production" && logger,
	sagaMiddleware,
].filter((middleWare): middleWare is Middleware => Boolean(middleWare));

//devtools
const composeEhnancer =
	(process.env.NODE_ENV !== "production" &&
		window &&
		window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
	compose;
const composedEnhancers = composeEhnancer(applyMiddleware(...middleWares));

//Persistor to save cart state after reload
//type for persistConfig
type ExtendedPersistConfig = PersistConfig<RootState> & {
	whitelist: (keyof RootState)[];
};

const persistConfig: ExtendedPersistConfig = {
	key: "root",
	storage,
	// blacklist user since we have onAuthStateChange listener and categories
	whitelist: ["cart"],
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

export type RootState = ReturnType<typeof rootReducer>;
