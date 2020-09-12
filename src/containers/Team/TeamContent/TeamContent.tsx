import React, { useEffect, useState } from 'react';
import { withRouter, useHistory, useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';

import { SideBar } from '../../../components';

const useStyles = makeStyles({
	container: {
		width: '100%',
		display: 'flex'
	}
});

const TeamContent: React.FC = () => {
	const classes = useStyles();

	const history = useHistory();
	const location = useLocation();

	const paramsString: URLSearchParams = new URLSearchParams(location.search);
	const [activeTab, setActiveTab] = useState(
		paramsString.get('tab') ?? 'executives'
	);

	useEffect(() => {
		const paramsString: URLSearchParams = new URLSearchParams(
			location.search
		);
		paramsString.set('tab', activeTab);
		history.push(`${location.pathname}?${paramsString}`);
	}, [activeTab, history, location.pathname, location.search]);

	const switchActiveTabHandler = (tab: string) => {
		setActiveTab(tab);
	};

	return (
		<div className={classes.container}>
			<SideBar switchActiveTabHandler={switchActiveTabHandler} />
			<p>{activeTab}</p>
		</div>
	);
};

export default withRouter(TeamContent);
