import React from 'react';
import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Button
} from '@material-ui/core';
import { Search, MoreVert, AccountCircleOutlined } from '@material-ui/icons';

const useStyles = makeStyles({
	navBar: {
		backgroundColor: 'white',
		boxShadow: 'none',
		position: 'sticky',
		color: '#6fc38f'
	},
	navBarItem: {
		flexGrow: 2,
		color: 'inherit',
		textTransform: 'none'
	},
	searchIconButton: {
		color: 'inherit'
	},
	moreVertIconButton: {
		color: 'inherit'
	},
	accountCircleOutlinedIconButton: {
		color: 'inherit'
	}
});

const NavBar: React.FC = () => {
	const classes = useStyles();

	return (
		<AppBar className={classes.navBar}>
			<Toolbar>
				<Button className={classes.navBarItem}>
					<Typography variant="h6" style={{ marginLeft: '5%' }}>
						Home
					</Typography>
				</Button>
				<Button className={classes.navBarItem}>
					<Typography variant="h6">Hackathon</Typography>
				</Button>
				<Button className={classes.navBarItem}>
					<Typography variant="h6">Mentorship</Typography>
				</Button>
				<Button className={classes.navBarItem}>
					<Typography variant="h6">Summer</Typography>
				</Button>
				<Button className={classes.navBarItem}>
					<Typography variant="h6">Team</Typography>
				</Button>
				<Button className={classes.navBarItem}>
					<Typography variant="h6">Programs</Typography>
				</Button>
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
