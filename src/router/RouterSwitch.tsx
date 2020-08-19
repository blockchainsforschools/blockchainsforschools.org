import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';

const RouterSwitch: React.FC = () => {
	const location = useLocation();
	return (
		<Switch location={location}>
			<Route path="/"></Route>
		</Switch>
	);
};

export default RouterSwitch;
