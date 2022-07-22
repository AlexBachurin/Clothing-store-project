import { AnyAction } from "redux";

//matchable type for action creator
type Matchable<AC extends () => AnyAction> = AC & {
	type: ReturnType<AC>["type"];
	match(action: AnyAction): action is ReturnType<AC>;
};

//with matcher
export function withMatcher<AC extends () => AnyAction & { type: string }>(
	actionCreator: AC
): Matchable<AC>;
//overload for matcher with params
export function withMatcher<
	AC extends (...args: any[]) => AnyAction & { type: string }
>(actionCreator: AC): Matchable<AC>;

//action creator function return action and every action have a type
export function withMatcher(actionCreator: Function) {
	//invoking function of action creator we getting back object and then getting type
	const type = actionCreator().type;
	return Object.assign(actionCreator, {
		type,
		//if this is true then we get back ReturnType with right action
		match(action: AnyAction) {
			return action.type === type;
		},
	});
}
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
