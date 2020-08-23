import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

interface SponsorCellProps {
	alt: string;
	src: string;
}

const useStyles = makeStyles({
	sponsorCellImage: {
		margin: '50px 50px'
	}
});

const SponsorCell: React.FC<SponsorCellProps> = props => {
	const { alt, src } = props;
	const classes = useStyles();

	return (
		<Grid item spacing={7}>
			<img
				src={src}
				alt={alt}
				width="200px"
				className={classes.sponsorCellImage}
			/>
		</Grid>
	);
};

export default SponsorCell;
