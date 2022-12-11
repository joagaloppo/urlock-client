import Nav from '../../layouts/Nav';
import Footer from '../../layouts/Footer';

import Hero from './sections/hero';
import HowItWorks from './sections/howItWorks';
import Benefits from './sections/benefits';
import CTA from './sections/cta';
import FAQ from './sections/faq';

function Landing(props) {
	return (
		<>
			<Nav />
			<Hero />
			<HowItWorks />
			<Benefits />
			<CTA />
			<FAQ />
			<Footer />
		</>
	);
}

export default Landing;
