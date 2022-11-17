import { useState, useEffect } from "react";
import axios from "axios";
import Container from "../../container.component";
import DataTable from "../../data.table.comonent.jsx";

const SiswaList = () => {
	const [siswa, setSiswa] = useState([]);
	const [reload, setReload] = useState(1);

	const success = 0;

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
	}, [reload]);

	const setDeleted = (num) => {
		setReload(num);
	};

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
										<DataTable
											key={i}
											num={i + 1}
											idSiswa={data._id}
											namaSiswa={data.nama}
											jurusanSiswa={data.jurusan}
											kelasSiswa={data.kelas}
											setDeleted={setDeleted}
										/>
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
