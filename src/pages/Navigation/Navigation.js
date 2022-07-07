import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/nav-logo.svg";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import CartIcon from "../../components/CartIcon/CartIcon";
import { useCartContext } from "../../contexts/cartContext";

import { signOutUser } from "../../utils/firebase/firebase";
import Wrapper from "./Wrapper";
const Navigation = () => {
	const { currentUser } = useSelector((store) => store.user);
	const { isCartOpen, openCart } = useCartContext();

	const logoutUser = async () => {
		await signOutUser();
	};

	//open cart
	const handleOpenCart = () => {
		openCart();
	};
	return (
		<Wrapper>
			<nav className="navigation">
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

					<CartIcon handleOpenCart={handleOpenCart} />
					{isCartOpen ? <CartDropdown /> : null}
				</div>
			</nav>
			{/* display Outlet under Navigation at all times, there will be nested routes */}
			<Outlet />
		</Wrapper>
	);
};

export default Navigation;
