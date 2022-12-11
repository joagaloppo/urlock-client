import { generateLinks } from '../../../../../utils/generateLinks';
import Tbody from './tbody';

function Table(props) {
	const data = generateLinks();

	return (
		<table className="mx-auto max-w-full table-fixed text-center text-sm text-gray-500">
			<thead className="bg-gray-100 text-xs uppercase text-gray-700">
				<tr>
					<th scope="col" className="max-w-[5%] py-3 px-6">
						Link
					</th>
					<th scope="col" className="max-w-[10%] py-3 px-6">
						Created
					</th>
					<th scope="col" className="max-w-[10%] py-3 px-6">
						Clicks
					</th>
					<th scope="col" className="max-w-[37.5%] py-3 px-6">
						Action URL
					</th>
					<th scope="col" className="max-w-[37.5%] py-3 px-6">
						Final URL
					</th>
				</tr>
			</thead>
			<tbody>{data && data.map((e, i) => <Tbody key={i} data={e} />)}</tbody>
		</table>
	);
}

export default Table;
