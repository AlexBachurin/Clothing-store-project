import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
//helper thar runs before the action hits reducer
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
	Boolean
);

//Persistor to save state after reload
const persistConfig = {
	key: "root",
	storage,
	// blacklist user since we have onAuthStateChange listener
	blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composedEnhancers = compose(applyMiddleware(...middleWares));
//pass middleWare as 3rd argument, so we pass second argument as undefined
export const store = createStore(persistedReducer, composedEnhancers);

export const persistor = persistStore(store);
