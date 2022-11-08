import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layouts/main.layout.component";
import Home from "./components/pages/home/create.user.component";
import UserList from "./components/pages/user/user.list.component";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="userList" element={<UserList />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
