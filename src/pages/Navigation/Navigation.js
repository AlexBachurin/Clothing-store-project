import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/nav-logo.svg";
import "./navigation.styles.scss";
const Navigation = () => {
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
					<Link to="/sign-in" className="nav-link">
						SignIn
					</Link>
				</div>
			</div>
			{/* display Outlet under Navigation at all times, there will be nested routes */}
			<Outlet />
		</>
	);
};

export default Navigation;
