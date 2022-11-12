const FormSiswa = (props) => {
	const {
		onChangeNama,
		onChangeJurusan,
		onChangeKelas,
		submitSiswa,
		nama,
		jurusan,
		kelas,
	} = props;

	return (
		<form onSubmit={submitSiswa}>
			<div className="mb-6">
				<label className="block mb-2 text-sm font-medium text-gray-900">
					Masukan Nama
				</label>
				<input
					type="text"
					id="nama"
					className="bg-gray-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder="John Doe"
					required
					onChange={onChangeNama}
					value={nama}
				/>
			</div>
			<div className="mb-6">
				<label className="block mb-2 text-sm font-medium text-gray-900">
					Masukan Jurusan
				</label>
				<input
					type="text"
					id="nama"
					className="bg-gray-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder="RPL/AK/AP"
					required
					onChange={onChangeJurusan}
					value={jurusan}
				/>
			</div>
			<div className="mb-6">
				<label className="block mb-2 text-sm font-medium text-gray-900">
					Masukan Kelas
				</label>
				<input
					type="text"
					id="kelas"
					className="bg-gray-20 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
					placeholder="XII RPL 1/2/3"
					required
					onChange={onChangeKelas}
					value={kelas}
				/>
			</div>
			<button
				type="submit"
				className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full md:w-auto px-5 py-2.5 text-center"
			>
				Submit
			</button>
		</form>
	);
};

export default FormSiswa;
