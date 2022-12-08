import Table from '../../../components/dashboard/table';

function Menu(props) {
	return (
		<div className="my-8 ml-8 max-w-[972px] bg-gray-50 w-full rounded-lg shadow-sm">
			<div className="px-12 py-8">
				<div>
					<h2 className="text-gray-700 tracking-tight font-semibold text-2xl pb-2">Dashboard</h2>
					<p className="text-gray-500 tracking-tighter font-light text-md">
						Welcome back to your dashboard. Here you can see your links and statistics.
					</p>
					<p className="text-gray-500 tracking-tighter font-light text-md">
						Also you can create new links and manage your account. Have fun!
					</p>
				</div>
			</div>

			<Table />

			<div className="flex flex-row justify-between items-center px-12 py-8">
				<p className=" text-gray-500 tracking-tighter font-light text-sm text-center">
					Showing only 15 links of 2,102
				</p>
				<p className=" text-gray-500 tracking-tighter font-light text-sm text-center">
					To see all your links or edit them, <span className="text-blue-400">click here</span>
				</p>
			</div>
		</div>
	);
}

export default Menu;
