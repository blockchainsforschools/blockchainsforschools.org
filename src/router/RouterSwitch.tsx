import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

import { Home } from '../pages';

const RouterSwitch: React.FC = () => {
	const location = useLocation();
	return (
		<Switch location={location}>
			<Route path="/" exact>
				<Home />
			</Route>
		</Switch>
	);
};

export default RouterSwitch;
