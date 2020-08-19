import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import RouterSwitch from './RouterSwitch';
import { NavBar, Footer } from '../components/layout';

const RouterApp: React.FC = () => {
	return (
		<div>
			<BrowserRouter>
				<NavBar />
				<RouterSwitch />
				<Footer />
			</BrowserRouter>
		</div>
	);
};

export default RouterApp;
