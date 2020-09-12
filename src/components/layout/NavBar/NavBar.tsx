import React from 'react';
import { makeStyles, AppBar, Toolbar, Typography } from '@material-ui/core';

import HackBFS from '../../../assets/images/hackBFS.png';
import { NavMenu } from '../../../containers';

const useStyles = makeStyles({
	root: { flexGrow: 1 },
	navBar: {
		backgroundColor: 'white',
		boxShadow: 'none',
		position: 'sticky',
		color: '#6fc38f'
	},
	navBarFiller: {
		display: 'inline-block',
		flexGrow: 1
	},
	LogoText: {
		color: '#4cbb85',
		fontSize: '1.5rem',
		font: 'inherit'
	},
	LogoIcon: {
		height: '64px',
		display: 'inline',
		verticalAlign: 'middle'
	}
});

const NavBar: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar className={classes.navBar}>
				<Toolbar>
					<span className={classes.LogoText}>
						<img
							src={HackBFS}
							alt={'HackBFS'}
							className={classes.LogoIcon}
						/>
						<Typography
							variant="h6"
							style={{ display: 'inline-flex' }}
						>
							HackBFS
						</Typography>
					</span>
					<NavMenu />
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default NavBar;
