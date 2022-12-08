import { generateLinks } from '../../utils/generateLinks';
import Tbody from './tbody';

function Table(props) {
	const data = generateLinks();

	return (
		<table className="max-w-full mx-auto table-fixed text-sm text-center text-gray-500">
			<thead className="text-xs text-gray-700 uppercase bg-gray-100">
				<tr>
					<th scope="col" className="py-3 px-6 max-w-[5%]">
						Link
					</th>
					<th scope="col" className="py-3 px-6 max-w-[10%]">
						Created
					</th>
					<th scope="col" className="py-3 px-6 max-w-[10%]">
						Clicks
					</th>
					<th scope="col" className="py-3 px-6 max-w-[37.5%]">
						Action URL
					</th>
					<th scope="col" className="py-3 px-6 max-w-[37.5%]">
						Final URL
					</th>
				</tr>
			</thead>
			<tbody>{data && data.map((e, i) => <Tbody key={i} data={e} />)}</tbody>
		</table>
	);
}

export default Table;
