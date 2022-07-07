import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

//helper thar runs before the action hits reducer
const middleWares = [logger];

const composedEnhancers = compose(applyMiddleware(...middleWares));
//pass middleWare as 3rd argument, so we pass second argument as undefined
export const store = createStore(rootReducer, undefined, composedEnhancers);
