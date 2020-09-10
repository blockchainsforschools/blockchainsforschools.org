import React from 'react';

import { Banner } from '../../components';
import SideBar from "./SideBar";
import Content from './Content';
import { makeStyles} from '@material-ui/core';
import { BrowserRouter } from 'react-router-dom';

const useStyles = makeStyles({
    container: {
        width: '100%',
        display: 'flex',
    },
});

const Team: React.FC = () => {
	const classes = useStyles();
	return (
		<BrowserRouter>
			<Banner 
				title="Our Team" 
				subtitle={"behind the scenes is a devoted team of \nstudent working to help make everything run \nsmoothly. Learn more about each of us"}
			/>
			<div className={classes.container}>
				<SideBar/>
				<Content />
			</div>
			
		</BrowserRouter>
	);
};

export default Team;
