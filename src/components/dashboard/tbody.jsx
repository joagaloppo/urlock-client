import { BiCopy } from 'react-icons/bi';

function Tbody({ data }) {
	return (
		<tr className="bg-gray-50 border-b">
			<th scope="row" className="py-4 px-2 flex justify-center">
				<BiCopy className="text-gray-400 cursor-pointer" />
			</th>
			<td className="py-4 px-2">{data.date}</td>
			<td className="py-4 px-6">{data.clicks}</td>
			<td className="py-4 px-6 text-left overflow-hidden">
				<span className="cursor-pointer text-blue-400 whitespace-nowrap text-ellipsis">{data.actionUrl}</span>
			</td>
			<td className="py-4 px-6 text-left overflow-hidden">
				<span className="cursor-pointer text-blue-400 whitespace-nowrap text-ellipsis">{data.finalUrl}</span>
			</td>
		</tr>
	);
}

export default Tbody;
