import Nav from '../../layouts/Nav';
import Footer from '../../layouts/Footer';
import Template from './components/template';
import Loading from './components/loading';
import Error from './components/error';
import NotFound from '../../layouts/Error';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { getRequest } from '../../services/httpRequest';

function Link() {
	const { slug } = useParams();
	if (slug.length < 5 || slug.length < 5) return <NotFound />;
	const { isLoading, error, data } = useQuery('link', () => getRequest(`/data/link?slug=${slug}`).then((res) => res));
	if (isLoading) return <Loading />;
	if (error) return <Error error={error} />;
	if (!data?.link) return <NotFound />;

	return (
		<>
			<Nav />
			<Template data={data} />
			<Footer />
		</>
	);
}

export default Link;
