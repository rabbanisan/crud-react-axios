import React, { useState, useEffect } from "react";
import axios from "axios";
import DataTable from "./data.table.component";

const User = () => {
	const [nama, setNama] = useState("");
	const [kelas, setKelas] = useState("");

	return (
		<div class="overflow-x-auto relative">
			<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
				<thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
					<tr>
						<th scope="col" class="py-3 px-6">
							Nama
						</th>
						<th scope="col" class="py-3 px-6">
							Kelas
						</th>
					</tr>
				</thead>
				<tbody>
					<DataTable />
				</tbody>
			</table>
		</div>
	);
};

export default User;
