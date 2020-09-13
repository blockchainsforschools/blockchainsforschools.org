import React from 'react';

import { makeStyles, Typography } from '@material-ui/core';
import leftImage from '../../../assets/images/teamImage.png';
import rightImage from '../../../assets/images/bulb.png';

const useStyles = makeStyles({
	wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},

	left: {
		height: '300px',
		width: '30%',
		display: 'flex',
		justifyContent: 'right',
		alignItems: 'center',
	},
	leftImage: {
		height: '150px',
		width: '150px',
		backgroundSize: 'cover',
		backgroundImage: `url(${leftImage})`,
		color: 'red'
	},

	right: {
		height: '300px',
		width: '30%',
		display: 'flex',
		justifyContent: 'left',
		alignItems: 'center',
	},
	rightImage: {
		height: '150px',
		width: '150px',
		backgroundSize: 'cover',
		backgroundImage: `url(${rightImage})`,
		color: 'red'
	},

	container: {
		height: '300px',
		width: '40%',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		flexWrap: 'wrap'
	},

	item: {
		width: '100vw',
		textAlign: 'center'
	},

	itemTitle: {
		fontSize: '72px',
		fontWeight: 500,
		color: '#6fc38f',
		marginBottom: '8px'
	},

	itemSubTitle: {
		width: '400px',
		fontSize: '20px',
		fontWeight: 400,
		color: 'gray',
		marginBottom: '8px'
	}
});

const Banner: React.FC<{ title: string; subtitle: string }> = ({
	title,
	subtitle
}) => {
	const classes = useStyles();
	return (
		<div className={classes.wrapper}>
			<div className={classes.left}>
				<div className={classes.leftImage}></div>
			</div>
			<div className={classes.container}>
				<div className={classes.item}>
					<Typography variant="h1" className={classes.itemTitle}>
						{title}
					</Typography>
				</div>
				<div className={classes.item}>
					<Typography
						variant="body1"
						className={classes.itemSubTitle}
						style={{ margin: 'auto' }}
					>
						{subtitle}
					</Typography>
				</div>
			</div>
			<div className={classes.right}>
				<div className={classes.rightImage}></div>
			</div>
		</div>
	);
};

export default Banner;
