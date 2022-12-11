import Left from './components/left';
import Right from './components/right';

function Nav() {
	return (
		<nav className="w-full bg-blue-500 py-4">
			<div className="m-auto flex max-w-screen-xl flex-row place-content-between items-center">
				<Left />
				<Right />
			</div>
		</nav>
	);
}

export default Nav;
