import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, redirect } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import Landing from './features/landing';
import Dashboard from './features/dashboard';
import Summary from './features/dashboard/pages/summary';
import Links from './features/dashboard/pages/links';
import Link from './features/link';
import Error from './layouts/Error';
import Cookie from './Cookie';
import './assets/styles/index.css';

const queryClient = new QueryClient();

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Landing />} errorElement={<Error />} />

			<Route path="/dashboard" element={<Dashboard />}>
				<Route index loader={() => redirect('/dashboard/summary')} />
				<Route path="/dashboard/summary" element={<Summary />} />
				<Route path="/dashboard/links" element={<Links />} />
			</Route>

			<Route path="/cookie" element={<Cookie />} />
			<Route path="/:slug" element={<Link />} />
		</>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	</React.StrictMode>
);
