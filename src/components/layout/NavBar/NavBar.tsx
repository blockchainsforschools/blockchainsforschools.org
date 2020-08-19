import React from 'react';
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	IconButton
} from '@material-ui/core';
import { Search, MoreVert, AccountCircleOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
	navBar: {
		backgroundColor: 'white',
		boxShadow: 'none'
	},
	navBarItem: {
		color: '#6fc38f',
		flexGrow: 2
	},
	searchIconButton: {
		color: '#6fc38f'
	},
	moreVertIconButton: {
		color: '#6fc38f'
	},
	accountCircleOutlinedIconButton: {
		color: '#6fc38f'
	}
});

const NavBar: React.FC = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.navBar}>
			<Toolbar>
				<Typography variant="h6" className={classes.navBarItem}>
					Home
				</Typography>
				<Typography variant="h6" className={classes.navBarItem}>
					Hackathon
				</Typography>
				<Typography variant="h6" className={classes.navBarItem}>
					Mentorship
				</Typography>
				<Typography variant="h6" className={classes.navBarItem}>
					Summer
				</Typography>
				<Typography variant="h6" className={classes.navBarItem}>
					Team
				</Typography>
				<Typography variant="h6" className={classes.navBarItem}>
					Programs
				</Typography>
				<IconButton className={classes.searchIconButton}>
					<Search />
				</IconButton>
				<IconButton className={classes.moreVertIconButton}>
					<MoreVert />
				</IconButton>
				<IconButton className={classes.accountCircleOutlinedIconButton}>
					<AccountCircleOutlined />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
