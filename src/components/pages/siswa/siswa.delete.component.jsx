import { useLocation } from "react-router-dom";
import SiswaList from "./siswa.list.component";

const SiswaDelete = () => {
	const location = useLocation();
	console.log(location);
	return <SiswaList />;
};

export default SiswaDelete;
