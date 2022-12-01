import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../container.component";
import FormSiswa from "../../form.siswa";

const SiswaEdit = () => {
	const location = useLocation();
	const idSiswa = location.state.id;

	// const [siswa, setSiswa] = useState([]);
	const [nama, setNama] = useState("");
	const [kelas, setKelas] = useState("");
	const [jurusan, setJurusan] = useState("");

	useEffect(() => {
		axios
			.get(`https://crud-express-mongoatlas.rabbanisan.repl.co/update-siswa/${idSiswa}`)
			.then((res) => {
				setNama(res.data.nama);
				setJurusan(res.data.jurusan);
				setKelas(res.data.kelas);
				// console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [idSiswa]);

	const onChangeNama = (e) => {
		setNama(e.target.value);
	};

	const onChangeJurusan = (e) => {
		setJurusan(e.target.value);
	};

	const onChangeKelas = (e) => {
		setKelas(e.target.value);
	};

	const submitSiswa = (e) => {
		e.preventDefault();
		axios
			.post(`https://crud-express-mongoatlas.rabbanisan.repl.co/update-siswa/${idSiswa}`, {
				nama: nama,
				jurusan: jurusan,
				kelas: kelas,
			})
			.then((res) => {
				alert("Insert Success !");
				console.log(res);
				setNama("");
				setJurusan("");
				setKelas("");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<section className="create-siswa py-10 bg-gray-50">
			<Container className="flex flex-col justify-center items-center my-10 md:flex-row">
				<div className="illustration flex justify-center items-center md:mr-12 w-6/12">
					<img
						className="w-[100%]"
						src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1667961780/React-project/unboxing_xbiwex.svg"
						alt="illustration"
					/>
				</div>
				<div className="section-content w-8/12 md:w-6/12">
					<h2 className="text-center mb-4 font-semibold text-center text-[24px] md:text-[32px] md:text-right md:mb-8">
						Input data siswa
					</h2>
					<FormSiswa
						onChangeNama={onChangeNama}
						onChangeJurusan={onChangeJurusan}
						onChangeKelas={onChangeKelas}
						submitSiswa={submitSiswa}
						nama={nama}
						jurusan={jurusan}
						kelas={kelas}
					/>
				</div>
			</Container>
		</section>
	);
};

export default SiswaEdit;
