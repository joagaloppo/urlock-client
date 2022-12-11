import { BiCopy } from 'react-icons/bi';

function Tbody({ data }) {
	return (
		<tr className="border-b bg-gray-50">
			<th scope="row" className="flex justify-center py-4 px-2">
				<BiCopy className="cursor-pointer text-gray-400" />
			</th>
			<td className="py-4 px-2">{data.date}</td>
			<td className="py-4 px-6">{data.clicks}</td>
			<td className="overflow-hidden py-4 px-6 text-left">
				<span className="cursor-pointer text-ellipsis whitespace-nowrap text-blue-400">{data.actionUrl}</span>
			</td>
			<td className="overflow-hidden py-4 px-6 text-left">
				<span className="cursor-pointer text-ellipsis whitespace-nowrap text-blue-400">{data.finalUrl}</span>
			</td>
		</tr>
	);
}

export default Tbody;
