import axios from "axios";
// import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const SiswaDelete = () => {
	// const [deleteSuccess, setDeleteSuccess] = useState(0);
	const location = useLocation();
	const navigate = useNavigate();

	console.log(location);
	const idSiswa = location.state.id;
	// let deleteSuccess = 0;

	axios
		.get(`http://localhost:5000/delete-siswa/${idSiswa}`)
		.then(() => {
			navigate("listSsiswa");
		})
		.catch((error) => {
			console.log(error);
		});
};

export default SiswaDelete;
