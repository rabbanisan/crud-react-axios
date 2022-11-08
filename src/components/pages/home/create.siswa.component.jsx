import React, { useState } from "react";
import axios from "axios";
import Jumbotron from "./jumbotron.component";

const CreateUser = () => {
	const [nama, setNama] = useState("");
	const [kelas, setKelas] = useState("");

	const onChangeNama = (e) => {
		setNama(e.target.value);
	};

	const onChangeKelas = (e) => {
		setKelas(e.target.value);
	};

	const onSubmit = (e) => {
		e.preventDefault();
		const userObject = {
			nama: nama,
			kelas: kelas,
		};

		// axios
		// 	.post("http://localhost:4000/users/create", userObject)
		// 	.then((res) => {
		// 		console.log(res.data);
		// 	})
		// 	.catch((error) => {
		// 		console.log(error);
		// 	});
	};

	return (
		<>
			{/* <Jumbotron /> */}
			<section className="create-user flex justify-center my-10">
				<form className="w-6/12" onSubmit={onSubmit}>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Masukan Nama
						</label>
						<input
							type="text"
							id="nama"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							required
							onChange={onChangeNama}
							value={nama}
						/>
					</div>
					<div className="mb-6">
						<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Masukan Kelas
						</label>
						<input
							type="text"
							id="kelas"
							className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
							placeholder="xii rpl 1/2/3"
							required
							onChange={onChangeKelas}
							value={kelas}
						/>
					</div>
					<button
						type="submit"
						className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
					>
						Submit
					</button>
				</form>
			</section>
		</>
	);
};

export default CreateUser;
