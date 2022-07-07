import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

//helper thar runs before the action hits reducer
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
	Boolean
);

const composedEnhancers = compose(applyMiddleware(...middleWares));
//pass middleWare as 3rd argument, so we pass second argument as undefined
export const store = createStore(rootReducer, composedEnhancers);
