import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
const ProtectedRoute = ({ children }) => {
	const { currentUser } = useSelector((store) => store.user);
	if (currentUser) {
		return <Navigate to="/" />;
	}
	return children;
};

export default ProtectedRoute;
