import React from 'react';
import { makeStyles, IconButton, Theme } from '@material-ui/core';

import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		flexGrow: 1
	},
	footer: {
		display: 'flex',
		backgroundColor: '#6fc38f',
		height: '50px',
		textAlign: 'center',
		padding: '35px',
		/* alignItems: 'center', */
		justifyContent: 'center'
	},
	circle: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: 'white',
		borderRadius: '50%',
		height: '45px',
		width: '45px'
	},
	iconContainer: {
		width: '35vw',
		height: '75px',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-evenly'
	},
	icon: {
		color: '#6fc38f',
	}
}));

const Footer: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.footer}>
			<div className={classes.iconContainer}>
				<div className={classes.circle}>
					<IconButton>
						{' '}
						<InstagramIcon className={classes.icon} />{' '}
					</IconButton>
				</div>
				<div className={classes.circle}>
					<IconButton>
						{' '}
						<FacebookIcon className={classes.icon} />{' '}
					</IconButton>
				</div>
				<div className={classes.circle}>
					<IconButton>
						{' '}
						<EmailIcon className={classes.icon} />{' '}
					</IconButton>
				</div>
				<div className={classes.circle}>
					<IconButton>
						{' '}
						<LinkedInIcon className={classes.icon} />{' '}
					</IconButton>
				</div>
				<div className={classes.circle}>
					<IconButton>
						{' '}
						<TwitterIcon className={classes.icon} />{' '}
					</IconButton>
				</div>
			</div>
		</div>
	);
};

export default Footer;
