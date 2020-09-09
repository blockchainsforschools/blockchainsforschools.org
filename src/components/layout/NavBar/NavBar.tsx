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
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
	root: {
		flexGrow: 1
	},
	navBar: {
		backgroundColor: 'white',
		boxShadow: 'none',
		position: 'sticky',
		color: '#6fc38f'
	},
	navBarItem: {
		color: 'inherit',
		textTransform: 'none',
		padding: 'inherit 10px'
	},
	navBarFiller: {
		flexGrow: 1
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
				<Button component={Link} to="/" className={classes.navBarItem}>
					<Typography variant="h6" style={{ fontWeight: 'bold' }}>
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
				<Button component={Link} to="/Team" className={classes.navBarItem}>
					<Typography variant="h6">Team</Typography>
				</Button>
				<Button className={classes.navBarItem}>
					<Typography variant="h6">Programs</Typography>
				</Button>
				<div className={classes.navBarFiller} />
				<IconButton edge="end" className={classes.searchIconButton}>
					<Search />
				</IconButton>
				<IconButton edge="end" className={classes.moreVertIconButton}>
					<MoreVert />
				</IconButton>
				<IconButton
					edge="end"
					className={classes.accountCircleOutlinedIconButton}
				>
					<AccountCircleOutlined />
				</IconButton>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
