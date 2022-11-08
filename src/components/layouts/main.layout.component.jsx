import React from "react";
import Navbar from "./navbar.component";

const MainLayout = ({ children }) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default MainLayout;
