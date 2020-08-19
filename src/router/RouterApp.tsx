import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouterSwitch from './RouterSwitch';
import { NavBar, Footer } from '../components/layout';

const RouterApp: React.FC = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<RouterSwitch />
			<Footer />
		</BrowserRouter>
	);
};

export default RouterApp;
