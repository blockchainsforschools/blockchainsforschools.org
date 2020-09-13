import React from 'react';

import {
	makeStyles
	// Typography, List, ListItem, Button
} from '@material-ui/core';
// import { Link } from 'react-router-dom';
// import { Home, Team} from '../../..';
import TeamMemberCard from '../../TeamMemberCard';

const useStyles = makeStyles({
	container: {
		height: '400px',
		width: '100%',
		padding: '30px',
		boxSizing: 'border-box',
		borderTop: '2px solid rgb(242, 242, 242)',
		display: 'flex',
		flexDirection: 'column'
	}
});

const Hackathon: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			{/* <TeamMemberCard title="Raunak Choudhury | Founder | MIT" /> */}
		</div>
	);
};

export default Hackathon;
