import React from 'react';

import { Hero, Content, Sponsors, Banner } from '../../components';

const Team: React.FC = () => {
	return (
		<div>
			<Banner 
				title="Our Team" 
				subtitle={"behind the scenes is a devoted team of \nstudent working to help make everything run \nsmoothly. Learn more about each of us"}
			/>
		</div>
	);
};

export default Team;
