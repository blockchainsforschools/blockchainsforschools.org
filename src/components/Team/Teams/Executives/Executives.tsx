import React from 'react';
import { makeStyles } from '@material-ui/core';

import TeamMemberCard from '../../TeamMemberCard';
import Portrait from '../../../../assets/images/steal_this_comic.png';

const useStyles = makeStyles({
	container: {
		height: '400px',
		width: '100%',
		padding: '30px',
		boxSizing: 'border-box',
		borderTop: '2px solid rgb(242, 242, 242)',
		overflow: 'auto'
	}
});

const Executives: React.FC = () => {
	const classes = useStyles();
	return (
		<div className={classes.container}>
			<TeamMemberCard
				title="Raunak Choudhury | Founder | MIT"
				portrait={Portrait}
				description="Raunak is a freshman at MIT, intending to major in Computer Science and minor in Business Management. He is extremely passionate about the benefits of technology when it is applied to society, as well as democratizing access to tech; to that end, he founded BlockchainsForSchools in July 2018 to spread awareness of blockchain technology after witnessing the generation gap in the blockchain industry in an internship at a blockchain company he had that summer. In his free time, he loves socializing with and meeting people, whether they be friends or new acquaintances, playing Smash or badminton, or working on pet projects."
				email=""
				linkedInUrl=""
				gitHubUrl=""
			/>
		</div>
	);
};

export default Executives;
