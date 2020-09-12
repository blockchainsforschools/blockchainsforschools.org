import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core';

import { Banner } from '../../components';
import { TeamContent } from '../../containers';

const useStyles = makeStyles({
	container: {
		width: '100%',
		display: 'flex'
	}
});

const Team: React.FC = () => {
	const classes = useStyles();

	return (
		<Fragment>
			<Banner
				title="Our Team"
				subtitle={
					'behind the scenes is a devoted team of \nstudent working to help make everything run \nsmoothly. Learn more about each of us'
				}
			/>
			<div className={classes.container}>
				<TeamContent />
			</div>
		</Fragment>
	);
};

export default Team;
