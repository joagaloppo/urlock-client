import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, redirect } from 'react-router-dom';

// Components
import Landing from './features/landing';

import Dashboard from './features/dashboard';
import Summary from './features/dashboard/pages/summary';
import Links from './features/dashboard/pages/links';

import Error from './layouts/Error';
import Cookie from './Cookie';
// -- FINISH --

import './assets/styles/index.css';

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Landing />} />

			<Route path="/dashboard" element={<Dashboard />}>
				<Route index loader={() => redirect('/dashboard/summary')} />
				<Route path="/dashboard/summary" element={<Summary />} />
				<Route path="/dashboard/links" element={<Links />} />
			</Route>

			<Route path="/cookie" element={<Cookie />} />
			<Route path="*" element={<Error />} />
		</>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
