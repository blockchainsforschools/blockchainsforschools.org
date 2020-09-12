import React from 'react';
import { makeStyles, Typography, IconButton, Button } from '@material-ui/core';
import {
	Search,
	MoreVert,
	AccountCircleOutlined,
	Menu
} from '@material-ui/icons';
import { Link } from 'react-router-dom';

const desktopMin = 1180;

const useStyles = makeStyles({
	navMenu: { display: 'inline' },
	navBarItem: {
		color: 'inherit',
		textTransform: 'none',
		padding: 'inherit 10px'
	},
	navBarFiller: {
		display: 'inline-block',
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
	},
	BurgerMenu: {
		display: 'none'
	},
	[`@media (max-width: ${desktopMin}px)`]: {
		navMenu: {
			display: 'none'
		},
		BurgerMenu: {
			display: 'block'
		},
		BurgerMenuButton: {
			color: 'inherit'
		}
	}
});

const NavMenu: React.FC = () => {
	const classes = useStyles();

	return (
		<>
			<div className={classes.navMenu}>
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
				<Button
					component={Link}
					to="/team"
					className={classes.navBarItem}
				>
					<Typography variant="h6">Team</Typography>
				</Button>
				<Button className={classes.navBarItem}>
					<Typography variant="h6">Programs</Typography>
				</Button>
			</div>
			<div className={classes.navBarFiller} />
			<div className={classes.navMenu}>
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
			</div>
			<span className={classes.BurgerMenu}>
				<IconButton edge="end" className={classes.BurgerMenuButton}>
					<Menu />
				</IconButton>
			</span>
		</>
	);
};

export default NavMenu;
