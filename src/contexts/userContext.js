import React, { useContext, useEffect, useReducer } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase/firebase";
import { USER_ACTION_TYPES } from "../actions/userActions";
import { userReducer } from "../reducers/userReducer";

const UserContext = React.createContext();

const initialState = {
	currentUser: null,
};

const UserProvider = ({ children }) => {
	const [state, dispatch] = useReducer(userReducer, initialState);

	useEffect(() => {
		//listen to auth change
		const unsubscribe = onAuthStateChangedListener((user) => {
			if (user) {
				createUserDocumentFromAuth(user);
			}
			setCurrentUser(user);
		});

		//unsubscribe from listener every time component unmounts
		return unsubscribe;
	}, []);

	const setCurrentUser = (user) => {
		dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
	};
	return (
		<UserContext.Provider
			value={{
				...state,
				setCurrentUser,
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

//global hook

const useUserContext = () => {
	return useContext(UserContext);
};

export { UserProvider, useUserContext };
