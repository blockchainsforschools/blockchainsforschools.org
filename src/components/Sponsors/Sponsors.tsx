import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import Accenture from '../../assets/images/sponsors/accenture.png';
import Algorand from '../../assets/images/sponsors/algorand.png';
import Amazon from '../../assets/images/sponsors/amazon.png';
import AnitaB from '../../assets/images/sponsors/anita_b.png';
import AWS from '../../assets/images/sponsors/aws.png';
import BenSquareLogo from '../../assets/images/sponsors/ben_square_logo.png';
import Cisco from '../../assets/images/sponsors/cisco.png';
import Citi from '../../assets/images/sponsors/citi.png';
import Coinbase from '../../assets/images/sponsors/coinbase.png';
import ConsenSys from '../../assets/images/sponsors/consensys.png';
import Cryptonomic from '../../assets/images/sponsors/cryptonomic.png';
import Deloitte from '../../assets/images/sponsors/deloitte.png';
import DigitalAssetHoldings from '../../assets/images/sponsors/digital-asset-holdings.png';
import DigitalOcean from '../../assets/images/sponsors/digital-ocean.png';
import Ethereum from '../../assets/images/sponsors/ethereum.png';
import EthereumFoundationLogo from '../../assets/images/sponsors/ethereum-foundation-logo.svg';
import SponsorCell from './SponsorCell';

const useStyles = makeStyles({
	sponsors: {
		textAlign: 'center',
		margin: '3% 0'
	},
	sponsorsTitle: {
		fontWeight: 700,
		color: '#6fc38f'
	}
});

const Sponsors = () => {
	const classes = useStyles();

	return (
		<div className={classes.sponsors}>
			<Typography variant="h3" className={classes.sponsorsTitle}>
				Our Past and Present Sponsors
			</Typography>
			<Grid container justify="center">
				<SponsorCell alt="Accenture" src={Accenture} />
				<SponsorCell alt="Algorand" src={Algorand} />
				<SponsorCell alt="Amazon" src={Amazon} />
				<SponsorCell alt="AnitaB" src={AnitaB} />
				<SponsorCell alt="AWS" src={AWS} />
				<SponsorCell alt="BenSquareLogo" src={BenSquareLogo} />
				<SponsorCell alt="Cisco" src={Cisco} />
				<SponsorCell alt="Citi" src={Citi} />
				<SponsorCell alt="Coinbase" src={Coinbase} />
				<SponsorCell alt="ConsenSys" src={ConsenSys} />
				<SponsorCell alt="Cryptonomic" src={Cryptonomic} />
				<SponsorCell alt="Deloitte" src={Deloitte} />
				<SponsorCell
					alt="DigitalAssetHoldings"
					src={DigitalAssetHoldings}
				/>
				<SponsorCell alt="DigitalOcean" src={DigitalOcean} />
				<SponsorCell alt="Ethereum" src={Ethereum} />
				<SponsorCell
					alt="EthereumFoundationLogo"
					src={EthereumFoundationLogo}
				/>
			</Grid>
		</div>
	);
};

export default Sponsors;
