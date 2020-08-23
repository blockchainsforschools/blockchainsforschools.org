import React from 'react';
import { Grid, makeStyles } from '@material-ui/core';

interface SponsorCellProps {
	alt: string;
	src: string;
}

const useStyles = makeStyles({
	sponsorCellImage: {
		margin: '20px 20px'
	}
});

const SponsorCell: React.FC<SponsorCellProps> = props => {
	const { alt, src } = props;
	const classes = useStyles();

	return (
		<Grid item>
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
