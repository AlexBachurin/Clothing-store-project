import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/nav-logo.svg";
import CartDropdown from "../../components/CartDropdown/CartDropdown";
import CartIcon from "../../components/CartIcon/CartIcon";
import { openCart } from "../../store/cart/cartAction";
import { RootState } from "../../store/store";
import { signOutStart } from "../../store/user/userAction";
import Wrapper from "./Wrapper";
const Navigation = () => {
	const { currentUser } = useSelector((store: RootState) => store.user);
	const { isCartOpen } = useSelector((store: RootState) => store.cart);
	const dispatch = useDispatch();
	const logoutUser = () => {
		dispatch(signOutStart());
	};

	//open cart
	const handleOpenCart = () => {
		dispatch(openCart());
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
