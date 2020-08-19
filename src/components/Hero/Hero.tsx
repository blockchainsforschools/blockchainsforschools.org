import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import HeroImage from '../../assets/images/coding.jpg';

const useStyles = makeStyles({
	hero: {
		width: '100vw',
		maxWidth: '100%',
		height: '80vh',
		position: 'relative',
		background: 'rgba(0, 0, 0, 0.5)'
	},
	heroImage: {
		height: 'inherit',
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		textAlign: 'center',
		color: 'white',
		backgroundImage: `url(${HeroImage})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		backgroundRepeat: 'no-repeat',
		backgroundAttachment: 'fixed',
		filter: 'blur(4px)',
		WebkitFilter: 'blur(4px)'
	},
	heroText: {
		position: 'absolute',
		top: '40%',
		left: '6%',
		color: 'white',
		justifyContent: 'left',
		width: '80%',
		height: '100%',
		zIndex: 2
	},
	heroTextBox: {
		position: 'relative'
	},
	heroTitle: { fontWeight: 700 },
	heroSubtitle: { width: 'inherit' },
	heroOverlay: {
		zIndex: 1,
		height: 'inherit',
		width: 'inherit',
		position: 'fixed',
		overflow: 'hidden',
		top: '0px',
		left: '0px',
		background: 'rgba(0, 0, 0, 0.5)'
	},
	greenRectangle: {
		width: '10px',
		height: '103%',
		backgroundColor: '#6fc38f',
		position: 'absolute',
		top: '0',
		left: '-3%'
	}
});

const Hero: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.hero}>
			<div className={classes.heroImage}>
				<div className={classes.heroOverlay} />
			</div>
			<div className={classes.heroText}>
				<div className={classes.heroTextBox}>
					<div className={classes.greenRectangle} />
					<Typography variant="h3" className={classes.heroTitle}>
						BLOCKCHAINS FOR SCHOOLS
					</Typography>
					<Typography variant="h5" className={classes.heroSubtitle}>
						a 501(c)(3) nonprofit aimed at connecting students with
						the blockchain industry. To that end we run a mentoring
						program, a summer internship program, and a hackathon.
						We also host series of workshops with companies all
						across NYC.
					</Typography>
				</div>
			</div>
		</div>
	);
};

export default Hero;
