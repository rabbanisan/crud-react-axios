import { Outlet } from "react-router-dom";
import Container from "../container.component";
import Navigation from "../navigation.component";

const Navbar = () => {
	const setMenu = () => {
		const menu = document.querySelector("#menu");
		menu.classList.toggle("hidden");
	};

	return (
		<>
			<nav className="top-0 sticky py-3 bg-gray-100 border-gray-200">
				<Container>
					<div className="container flex flex-wrap justify-between items-center mx-auto">
						<button className="flex items-center">
							<img
								src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1667964418/React-project/book-logo_iswslx.png"
								className="mr-3 h-6 sm:h-10"
								alt="SIS Logo"
							/>
							<span className="hidden sm:block self-center text-xl font-semibold whitespace-nowrap">
								Sistem Informasi Siswa
							</span>
							<span className="sm:hidden self-center text-xl font-semibold whitespace-nowrap">
								SIS
							</span>
						</button>
						<button
							data-collapse-toggle="navbar-solid-bg"
							type="button"
							className="inline-flex justify-center items-center ml-3 text-gray-400 rounded-lg md:hidden hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
							aria-controls="navbar-solid-bg"
							aria-expanded="false"
							onClick={setMenu}
						>
							<img
								src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1667893197/React-project/hamburger_cmaz02.png"
								alt="hamburger"
								className="w-[25px]"
							/>
						</button>
						<Navigation />
					</div>
				</Container>
			</nav>
			<Outlet />
		</>
	);
};

export default Navbar;
