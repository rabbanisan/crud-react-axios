import React from "react";
import Header from "./header";
import Footer from "./footer.component";

const MainLayout = ({ children }) => {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
};

export default MainLayout;
