import React, { useState } from "react";
import axios from "axios";
import Container from "../../container.component";
import FormSiswa from "../../form.siswa";

const CreateUser = () => {
	const [nama, setNama] = useState("");
	const [kelas, setKelas] = useState("");
	const [jurusan, setJurusan] = useState("");

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
			.post("http://localhost:5000/insert-siswa", {
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
		<>
			<section className="jumbotron justify-center my-14">
				<Container className="flex flex-col md:flex-row items-center">
					<div className="illustration ml-10 mb-5 w-5/12 md:w-10/12 md:hidden">
						<img
							src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1667961781/React-project/float_rfwbgg.svg"
							alt="illustration"
						/>
					</div>
					<div className="jumboText w-8/12 md:w-6/12 ">
						<h1 className="font-semibold text-[24px] sm:text-[32px]  md:text-[46px] lg:text-[52px] xl:text-[64px]">
							Hallo admin
						</h1>
						<p className="14px text-[12px] sm:text-[14px] md:text-[20px] xl:text-[28px]">
							This is a simple hero unit, a simple jumbotron-style component for
							calling extra attention to featured content or information.
						</p>
					</div>
					<div className="illustration ml-10 hidden w-3/12 md:w-8/12 md:block">
						<img
							src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1667961781/React-project/float_rfwbgg.svg"
							alt="illustration"
						/>
					</div>
				</Container>
			</section>
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
		</>
	);
};

export default CreateUser;
