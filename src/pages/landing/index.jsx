import One from './_ one';
import Two from './__ two';
import Three from './___ three';
import Four from './____ four';
import Five from './_____ five';
import GoTop from '../../components/goTop';

function Landing(props) {
	return (
		<>
			<One />
			{/* <div className="separator-one h-[100px] mt-[-90px] bg-transparent"></div> */}
			<Two />
			{/* <div className="separator-two h-[100px]"></div> */}
			<Three />
			{/* <div className="separator-three h-[100px]"></div> */}
			<Four />
			{/* <div className="separator-two h-[100px]"></div> */}
			<Five />
			<GoTop />
		</>
	);
}

export default Landing;
