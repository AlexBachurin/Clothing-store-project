import { AnyAction } from "redux";

//type for action with payload
export type ActionWithPayload<T, P> = {
	type: T;
	payload: P;
};
//type with action without payload
export type Action<T> = {
	type: T;
};
//function overloading
export function createAction<T extends string, P>(
	type: T,
	payload: P
): ActionWithPayload<T, P>;

//if payload is undefined then we get back just an Action
export function createAction<T extends string>(
	type: T,
	payload: void
): Action<T>;

export function createAction<T extends string, P>(type: T, payload: P) {
	return { type, payload };
}
