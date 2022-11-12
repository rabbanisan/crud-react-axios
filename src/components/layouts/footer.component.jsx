import Container from "../container.component";
import Navigation from "../navigation.component";

const Footer = () => {
	return (
		<footer className="py-4 bg-gray-200 border-gray-200 shadow px-2">
			<Container>
				<div className="my-5 border-b-2 border-gray-200 flex justify-center md:flex md:items-center md:justify-between">
					<a className="flex items-center mb-4 sm:mb-0">
						<img
							src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1667964418/React-project/book-logo_iswslx.png"
							className="mr-3 mr-3 h-4 sm:h-8"
							alt="Flowbite Logo"
						/>
						<span className="hidden sm:block self-center text-xl font-semibold whitespace-nowrap">
							Sistem Informasi Siswa
						</span>
						<span className="sm:hidden self-center text-sm sm:text-xl font-semibold whitespace-nowrap">
							SIS
						</span>
					</a>
					<Navigation />
				</div>
				<span className="block text-xs sm:text-sm text-gray-500 text-center">
					© 2022{" "}
					<a href="https://flowbite.com/" className="hover:underline">
						Sistem Informasi Siswa™
					</a>
					. All Rights Reserved.
				</span>
			</Container>
		</footer>
	);
};

export default Footer;
