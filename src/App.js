import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/main.layout.component";
import Home from "./components/pages/home/create.siswa.component";
import SiswaList from "./components/pages/user/siswa.list.component";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="userList" element={<SiswaList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
