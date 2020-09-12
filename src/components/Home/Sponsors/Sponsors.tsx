import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

import Accenture from '../../../assets/images/sponsors/accenture.png';
import Algorand from '../../../assets/images/sponsors/algorand.png';
import Amazon from '../../../assets/images/sponsors/amazon.png';
import BenSquareLogo from '../../../assets/images/sponsors/ben_square_logo.png';
import Cisco from '../../../assets/images/sponsors/cisco.png';
import Citi from '../../../assets/images/sponsors/citi.png';
import Coinbase from '../../../assets/images/sponsors/coinbase.png';
import ConsenSys from '../../../assets/images/sponsors/consensys.png';
import Deloitte from '../../../assets/images/sponsors/deloitte.png';
import DigitalAssetHoldings from '../../../assets/images/sponsors/digital-asset-holdings.png';
import DigitalOcean from '../../../assets/images/sponsors/digital-ocean.png';
import EthereumFoundationLogo from '../../../assets/images/sponsors/ethereum-foundation-logo.svg';
import EY from '../../../assets/images/sponsors/ey.png';
import Gemini from '../../../assets/images/sponsors/gemini.png';
import Google from '../../../assets/images/sponsors/google.png';
import IBM from '../../../assets/images/sponsors/ibm.png';
import JPMorgan from '../../../assets/images/sponsors/jpmorgan.png';
import Microsoft from '../../../assets/images/sponsors/microsoft.png';
import MITSandbox from '../../../assets/images/sponsors/mit-sandbox.png';
import R3 from '../../../assets/images/sponsors/r3.png';
import T3 from '../../../assets/images/sponsors/t3.png';
import TrailOfBits from '../../../assets/images/sponsors/trail-of-bits.png';
import SponsorCell from './SponsorCell';

const useStyles = makeStyles({
	sponsors: {
		textAlign: 'center',
		marginTop: '30px'
	},
	sponsorsTitle: {
		fontWeight: 700,
		color: '#6fc38f',
		marginBottom: '30px'
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
				<SponsorCell alt="Google" src={Google} />
				<SponsorCell alt="Microsoft" src={Microsoft} />
				<SponsorCell alt="Amazon" src={Amazon} />
				<SponsorCell alt="Cisco" src={Cisco} />
				<SponsorCell alt="Citi" src={Citi} />
				<SponsorCell alt="EY" src={EY} />
				<SponsorCell alt="DigitalOcean" src={DigitalOcean} />
				<SponsorCell alt="IBM" src={IBM} />
				<SponsorCell alt="JPMorgan" src={JPMorgan} />
				<SponsorCell
					alt="EthereumFoundationLogo"
					src={EthereumFoundationLogo}
				/>
				<SponsorCell alt="Coinbase" src={Coinbase} />
				<SponsorCell alt="ConsenSys" src={ConsenSys} />
				<SponsorCell alt="Gemini" src={Gemini} />
				<SponsorCell alt="Deloitte" src={Deloitte} />
				<SponsorCell alt="Accenture" src={Accenture} />
				<SponsorCell alt="Algorand" src={Algorand} />
				<SponsorCell alt="R3" src={R3} />
				<SponsorCell alt="T3" src={T3} />
				<SponsorCell
					alt="DigitalAssetHoldings"
					src={DigitalAssetHoldings}
				/>
				<SponsorCell alt="TrailOfBits" src={TrailOfBits} />
				<SponsorCell alt="BenSquareLogo" src={BenSquareLogo} />
				<SponsorCell alt="MITSandbox" src={MITSandbox} />
			</Grid>
		</div>
	);
};

export default Sponsors;
