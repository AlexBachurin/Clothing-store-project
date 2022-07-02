import React from "react";
import Button from "../Button/Button";
import "./cartDropdown.styles.scss";
const CartDropdown = () => {
	return (
		<div className="cart-dropdown-container">
			<div className="cart-items">
				<Button buttonType="inverted" type="button">
					checkout
				</Button>
			</div>
		</div>
	);
};

export default CartDropdown;
