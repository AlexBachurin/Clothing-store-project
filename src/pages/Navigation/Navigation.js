import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/nav-logo.svg";
import { useUserContext } from "../../contexts/userContext";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.styles.scss";
const Navigation = () => {
	const { currentUser } = useUserContext();

	const logoutUser = async () => {
		await signOutUser();
	};
	return (
		<>
			<div className="navigation">
				<Link to="/" className="logo-container">
					<Logo className="logo" />
				</Link>
				<div className="nav-links-container">
					<Link to="/shop" className="nav-link">
						Shop
					</Link>
					{currentUser ? (
						<Link to="/" className="nav-link" onClick={logoutUser}>
							Sign Out
						</Link>
					) : (
						<Link to="/auth" className="nav-link">
							Sign In
						</Link>
					)}
				</div>
			</div>
			{/* display Outlet under Navigation at all times, there will be nested routes */}
			<Outlet />
		</>
	);
};

export default Navigation;
