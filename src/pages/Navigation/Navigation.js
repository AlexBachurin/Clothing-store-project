import React from "react";
import { Outlet } from "react-router-dom";

const Navigation = () => {
	return (
		<div>
			<div>
				<h1>i am navigation</h1>
			</div>
			{/* display Outlet under Navigation at all times, there will be nested routes */}
			<Outlet />
		</div>
	);
};

export default Navigation;
