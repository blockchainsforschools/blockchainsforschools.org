import React from 'react';
import { makeStyles, Typography } from '@material-ui/core';

import HeroImage from '../../assets/images/coding.jpg';

const useStyles = makeStyles({
	hero: {
		height: '100%',
		position: 'relative'
	},
	heroImage: {
		width: '100vw',
		maxWidth: '100%',
		height: '80vh',
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
		filter: 'blur(5px)',
		WebkitFilter: 'blur(5px)'
	},
	heroText: {
		position: 'absolute',
		top: '40%',
		left: '5%',
		color: 'white',
		justifyContent: 'left',
		width: '80%',
		height: '100%'
	},
	heroTitle: { fontWeight: 700 },
	heroSubtitle: { width: 'inherit' }
	// greenRectangle: {
	// 	width: '10px',
	// 	height: '40%',
	// 	backgroundColor: '#6fc38f',
	// 	position: 'absolute'
	// }
});

const Hero: React.FC = () => {
	const classes = useStyles();

	return (
		<div className={classes.hero}>
			<div className={classes.heroImage} />
			<div className={classes.heroText}>
				{/* <div className={classes.greenRectangle} /> */}
				<Typography variant="h3" className={classes.heroTitle}>
					BLOCKCHAINS FOR SCHOOLS
				</Typography>
				<Typography variant="h5" className={classes.heroSubtitle}>
					a 501(c)(3) nonprofit aimed at connecting students with the
					blockchain industry. To that end we run a mentoring program,
					a summer internship program, and a hackathon. We also host
					series of workshops with companies all across NYC.
				</Typography>
			</div>
		</div>
	);
};

export default Hero;
