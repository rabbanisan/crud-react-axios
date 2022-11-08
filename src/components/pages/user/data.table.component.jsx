const DataTable = (props) => {
	const { nama, kelas } = props;
	return (
		<tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
			<td class="py-4 px-6">{nama}</td>
			<td class="py-4 px-6">{kelas}</td>
		</tr>
	);
};
