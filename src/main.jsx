import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

import LandingContainer from './containers/Landing';
import Summary from './containers/Dashboard/Summary';
import Error from './containers/Error';

import './assets/global.css';
import Cookie from './useCookie';

const router = createBrowserRouter([
	{
		path: '/',
		element: <LandingContainer />,
		errorElement: <Error />,
	},
	{
		path: '/dashboard',
		element: <Summary />,
	},
	{
		path: '/cookie',
		element: <Cookie />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
