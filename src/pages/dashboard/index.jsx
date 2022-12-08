import Sidebar from './_ one/sidebar';
import Menu from './_ one/dashboard';
import CreateDashboard from '../../components/modals/createDashboard';

function Dashboard(props) {
	return (
		<div className="w-full bg-gray-200 h-fit">
			<div className="flex flex-row max-w-screen-xl m-auto min-h-full">
				<Sidebar />
				<Menu />
				{/* <CreateDashboard /> */}
			</div>
		</div>
	);
}

export default Dashboard;
