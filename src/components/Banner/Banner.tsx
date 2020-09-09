import React from 'react';

import { makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		height: '300px',
		width: '100%',
		display: 'flex',
		justifyContent: 'center',
		alignContent: 'center',
		flexWrap: 'wrap',
	},

	item: {
		width: '100vw',
		textAlign: 'center',
	},

	itemTitle: {
		fontSize: '72px',
		fontWeight: 500,
		color: '#6fc38f',
		marginBottom: '8px',
	},

	itemSubTitle: {
		width: '400px',
		fontSize: '20px',
		fontWeight: 400,
		color: 'gray',
		marginBottom: '8px',
	},
});

const Banner: React.FC<{title:string, subtitle:string}> = ({children, title, subtitle}) => {
    const classes = useStyles();
	return (
		<div className={classes.container}>
			<div className={classes.item}>
				<Typography
					variant="h1"
					className={classes.itemTitle}
				>
					{title} 
				</Typography>
			</div>
			<div className={classes.item}>
				<Typography
					variant="body1"
					className={classes.itemSubTitle}
					style={{ margin: "auto" }}
				>
					{subtitle} 
				</Typography>
			</div>
		</div>
	);
};

export default Banner;
