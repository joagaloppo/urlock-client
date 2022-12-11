import Table from './components/table';

function Summary() {
	return (
		<div className="my-8 ml-8 w-full max-w-[972px] rounded-lg bg-gray-50 shadow-sm">
			<div className="px-12 py-8">
				<div>
					<h2 className="pb-2 text-2xl font-semibold tracking-tight text-gray-700">Dashboard</h2>
					<p className="text-md font-light tracking-tighter text-gray-500">
						Welcome back to your dashboard. Here you can see your links and statistics.
					</p>
					<p className="text-md font-light tracking-tighter text-gray-500">
						Also you can create new links and manage your account. Have fun!
					</p>
				</div>
			</div>

			<Table />

			<div className="flex flex-row items-center justify-between px-12 py-8">
				<p className=" text-center text-sm font-light tracking-tighter text-gray-500">
					Showing only 15 links of 2,102
				</p>
				<p className=" text-center text-sm font-light tracking-tighter text-gray-500">
					To see all your links or edit them, <span className="text-blue-400">click here</span>
				</p>
			</div>
		</div>
	);
}

export default Summary;
