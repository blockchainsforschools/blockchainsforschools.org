import React from 'react';

import {
	makeStyles,
	AppBar,
	Toolbar,
	Typography,
	IconButton,
	Button,
	Theme,
	Container,
	Grid,
	Paper,
} from '@material-ui/core';
import { Search, MoreVert, AccountCircleOutlined } from '@material-ui/icons';

const useStyles = makeStyles((theme: Theme) => ({
    wrapper: {
		height: 'initial',
        position: 'relative',
		backgroundColor: 'white',
		padding: '3.8vw',
    },
    
    itemTitle: {
		fontWeight: 500,
		color: '#6fc38f',
		marginBottom: '12px',
	},

	itemText: {
		marginBottom: '16px',
	},

	itemButton: {
		backgroundColor: '#6fc38f',
		color: 'white',
		marginBottom: '16px',
	},

	imagePlaceholder: {
		backgroundColor: 'gray',
		borderRadius: '8px',
		height: '37vh',
		width: '45vw',
	}
}));

//true means text container, false means an image container
const items = [
	{
		type: true,
		title: "Blockchains4Hacks 2020",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Commodo nulla facilisi nullam vehicula ipsum. Ut sem viverra aliquet eget sit. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Morbi leo urna molestie at elementum eu facilisis sed odio. Sem integer vitae justo eget.",
		button: "Hackathon!",
	},
	{
		type: false,

	},
	{
		type: false,
	},
	{
		type: true,
		title: "Mentorship Program",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Commodo nulla facilisi nullam vehicula ipsum. Ut sem viverra aliquet eget sit. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Morbi leo urna molestie at elementum eu facilisis sed odio. Sem integer vitae justo eget.",
		button: "Mentorship!"
	},
	{
		type: true,
		title: "Summer Immersion",
		text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum curabitur vitae nunc sed velit dignissim sodales ut eu. Commodo nulla facilisi nullam vehicula ipsum. Ut sem viverra aliquet eget sit. Pulvinar sapien et ligula ullamcorper malesuada proin libero. Morbi leo urna molestie at elementum eu facilisis sed odio. Sem integer vitae justo eget.",
		button: "Summer!",
	},
	{
		type: false,

	},
]

const Content: React.FC = () => {
	const classes = useStyles();

	return (
		<Grid container spacing={4}  justify="center" className={classes.wrapper}>
			{items.map(item => (
					<Grid item xs={12} sm={6} key={item.title}>
						{
							item.type == true ?
							(
								<div>
									<Typography variant="h5" className={classes.itemTitle}>
										{item.title}
									</Typography>
									<Typography variant="body1" className={classes.itemText}>
										{item.text}
									</Typography>
									<Button variant="contained" className={classes.itemButton}>
										{item.button}
									</Button>
								</div>
							) 
							:
							(
								<div>
									
									<div className={classes.imagePlaceholder}>
										
									</div>
								</div>
							)
						}
					</Grid>
				))
			}
		</Grid>
	);
};

export default Content;
