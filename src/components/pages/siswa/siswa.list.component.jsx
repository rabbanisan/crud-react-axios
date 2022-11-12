import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import axios from "axios";
import Container from "../../container.component";

const SiswaList = () => {
	const [siswa, setSiswa] = useState([]);
	const [id, setId] = useState(1);

	useEffect(() => {
		axios
			.get("http://localhost:5000/")
			.then((res) => {
				setSiswa(res.data);
				console.log(res.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, [id]);

	// useEffect(() => {
	// 	// axios
	// 	// 	.get(`http://localhost:5000/delete-siswa/${id}`)
	// 	// 	.then((res) => {
	// 	// 		setSiswa(res.data);
	// 	// 		console.log(res.data);
	// 	// 	})
	// 	// 	.catch((error) => {
	// 	// 		console.log(error);
	// 	// 	});
	// 	console.log(id);
	// }, [id]);

	// const navigate = useNavigate();

	return (
		<>
			<section className="jumbotron mb-4 mt-8 text-center py-8">
				<Container className="flex justify-center items-center">
					<div className="jumboText w-6/12 ">
						<h1 className="font-semibold text-3xl mb-5 sm:text-[36px] lg:text-[48px] xl:text-[64px]">
							Hello world!
						</h1>
						<p className="sm:text-[14px] lg:text-[18px] xl:text-[24px]">
							This is a simple hero unit, a simple jumbotron-style component for
							calling extra attention to featured content or information.
						</p>
					</div>
				</Container>
			</section>
			<section className="mt-5 mb-8">
				<Container className="mx-0 lg:mx-24 xl:mx-32">
					<div className="overflow-x-auto relative rounded-md">
						<table className="w-full text-sm text-left text-gray-500">
							<thead className="text-xs text-gray-700 uppercase bg-gray-50">
								<tr className="bg-white border-b text-center bg-blue-200">
									<th className="py-4 px-6 w-1/12" scope="col">
										No
									</th>
									<th className="py-4 px-6" scope="col">
										Nama
									</th>
									<th className="py-4 px-6" scope="col">
										Jurusan
									</th>
									<th className="py-4 px-6" scope="col">
										Kelas
									</th>
									<th className="py-4 px-6" scope="col">
										Aksi
									</th>
								</tr>
							</thead>
							<tbody>
								{siswa.map((data, i) => {
									return (
										<tr className="bg-white border-b bg-blue-100" key={i}>
											<td className="py-4 px-6">{i + 1}</td>
											<td className="py-4 px-6">{data.nama}</td>
											<td className="py-4 px-6">{data.jurusan}</td>
											<td className="py-4 px-6">{data.kelas}</td>
											<td className="py-4 px-6 w-2/12">
												<div className="action flex justify-around">
													<button className="edit">
														<img
															src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1668049293/React-project/edit2_ctl6tu.svg"
															alt=""
														/>
													</button>

													<button
														className="delete"
														onClick={setId(data._id)}
														// onClick={() => {
														// 	navigate("siswaDelete", {
														// 		state: { id: data._id },
														// 	});
														// }}
													>
														<img
															src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1668049332/React-project/delete_h9k8fx.svg"
															alt=""
														/>
													</button>
												</div>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</Container>
			</section>
		</>
	);
};

export default SiswaList;
