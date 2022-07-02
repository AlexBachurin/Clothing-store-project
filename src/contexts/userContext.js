import React, { useContext, useState, useEffect } from "react";
import {
	createUserDocumentFromAuth,
	onAuthStateChangedListener,
} from "../utils/firebase/firebase";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

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

	return (
		<UserContext.Provider
			value={{
				currentUser,
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
