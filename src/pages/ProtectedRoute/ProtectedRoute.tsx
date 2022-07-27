import React, { FC } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type ProtectedRouteProps = {
	children?: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
	const { currentUser } = useSelector((store: RootState) => store.user);
	if (currentUser) {
		return <Navigate to="/" />;
	}
	return children;
};

export default ProtectedRoute;
