import React from 'react';

import Executives from '../Teams/Executives';
import Hackathon from '../Teams/Hackathon';
import { Switch, Route, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		width: '100%',
		display: 'flex'
	}
});

const Content: React.FC = () => {
	const location = useLocation();
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<Switch location={location}>
				<Route path="/team/">
					<Executives />
				</Route>
				<Route path="/team/Hackathon">
					<Hackathon />
				</Route>
			</Switch>
		</div>
	);
};

export default Content;
