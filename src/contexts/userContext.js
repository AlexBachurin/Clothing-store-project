import React, { useContext, useState } from "react";

const UserContext = React.createContext();

const UserProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState(null);

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
