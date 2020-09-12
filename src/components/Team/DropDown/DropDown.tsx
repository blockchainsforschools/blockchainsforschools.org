import React from 'react';

import {
	makeStyles
	// Typography
} from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		height: '400px',
		width: '20%',
		backgroundColor: '#6fc38f'
	}
});

const DropDown: React.FC = () => {
	const classes = useStyles();
	return <div className={classes.container}></div>;
};

export default DropDown;
