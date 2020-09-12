import React from 'react';
import { makeStyles, Typography, List, ListItem } from '@material-ui/core';

const useStyles = makeStyles({
	container: {
		height: '400px',
		width: '20%',
		backgroundColor: '#6fc38f'
	},
	title: {
		width: '100%',
		textAlign: 'center',
		paddingTop: '40px'
	},

	sideTitle: {
		fontSize: '22px',
		fontWeight: 500,
		color: 'white',
		marginBottom: '8px'
	},

	sideItem: {
		fontSize: '22px',
		fontWeight: 400,
		textAlign: 'center',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		color: 'white'
	},
	sideItemText: {
		fontSize: '18px',
		fontWeight: 400,
		color: 'white'
	}
});

interface SideBarProps {
	switchActiveTabHandler: (tab: string) => void;
}

const SideBar: React.FC<SideBarProps> = ({ switchActiveTabHandler }) => {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<div className={classes.title}>
				<Typography variant="h1" className={classes.sideTitle}>
					Meet the Team
				</Typography>
			</div>
			<List>
				<ListItem
					button
					className={classes.sideItem}
					onClick={() => switchActiveTabHandler('executives')}
				>
					<Typography
						variant="body1"
						className={classes.sideItemText}
					>
						Executives
					</Typography>
				</ListItem>
				<ListItem
					button
					className={classes.sideItem}
					onClick={() => switchActiveTabHandler('hackathon')}
				>
					<Typography
						variant="body1"
						className={classes.sideItemText}
					>
						Hackathon
					</Typography>
				</ListItem>
				<ListItem
					button
					className={classes.sideItem}
					onClick={() => switchActiveTabHandler('mentorship')}
				>
					<Typography
						variant="body1"
						className={classes.sideItemText}
					>
						Mentorship
					</Typography>
				</ListItem>
				<ListItem
					button
					className={classes.sideItem}
					onClick={() => switchActiveTabHandler('design')}
				>
					<Typography
						variant="body1"
						className={classes.sideItemText}
					>
						Design
					</Typography>
				</ListItem>
				<ListItem
					button
					className={classes.sideItem}
					onClick={() => switchActiveTabHandler('webDevelopment')}
				>
					<Typography
						variant="body1"
						className={classes.sideItemText}
					>
						Web Development
					</Typography>
				</ListItem>
				<ListItem
					button
					className={classes.sideItem}
					onClick={() => switchActiveTabHandler('outreach')}
				>
					<Typography
						variant="body1"
						className={classes.sideItemText}
					>
						Outreach
					</Typography>
				</ListItem>
			</List>
		</div>
	);
};

export default SideBar;
