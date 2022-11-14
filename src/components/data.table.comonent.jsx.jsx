// import axios from "axios";
import { Link } from "react-router-dom";

const DataTable = (props) => {
	const { num, idSiswa, namaSiswa, jurusanSiswa, kelasSiswa } = props;

	return (
		<tr className="bg-white border-b bg-blue-100">
			<td className="py-4 px-6">{num}</td>
			<td className="py-4 px-6">{namaSiswa}</td>
			<td className="py-4 px-6">{jurusanSiswa}</td>
			<td className="py-4 px-6">{kelasSiswa}</td>
			<td className="py-4 px-6 w-2/12">
				<div className="action flex justify-around">
					<Link className="edit">
						<img
							src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1668049293/React-project/edit2_ctl6tu.svg"
							alt=""
						/>
					</Link>

					<Link
						className="delete"
						to="siswaDelete"
						state={{ id: `${idSiswa}` }}
					>
						<img
							src="https://res.cloudinary.com/dna8vdn4v/image/upload/v1668049332/React-project/delete_h9k8fx.svg"
							alt=""
						/>
					</Link>
				</div>
			</td>
		</tr>
	);
};

export default DataTable;
