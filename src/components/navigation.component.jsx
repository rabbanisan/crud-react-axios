import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
	const location = useLocation();
	const { pathname } = location;
	const splitLocation = pathname.split("/");

	return (
		<div className="hidden w-full md:block md:w-auto" id="menu">
			<ul className="flex flex-col mt-4 p-2 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent">
				<li
					className={`${
						splitLocation[1] === "" ? "text-blue-700" : ""
					} font-semibold hover:text-blue-400`}
				>
					<Link to="/">Home</Link>
				</li>
				<li
					className={`${
						splitLocation[1] === "siswaList" ? "text-blue-700" : ""
					} font-semibold hover:text-blue-400`}
				>
					<Link to="siswaList">Daftar Siswa</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navigation;
