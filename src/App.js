import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/main.layout.component";
import Home from "./components/pages/home/create.siswa.component";
// import SiswaDelete from "./components/pages/siswa/siswa.delete.component";
import SiswaEdit from "./components/pages/siswa/siswa.edit.component";
import SiswaList from "./components/pages/siswa/siswa.list.component";
// import UpdateSiswa from "./components/pages/update/update.siswa.component";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="siswaList" element={<SiswaList />} />
					<Route path="siswaList/siswaEdit" element={<SiswaEdit />} />
					{/* <Route path="siswaList/siswaDelete" element={<SiswaDelete />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
