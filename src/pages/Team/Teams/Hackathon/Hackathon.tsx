import React from 'react';

import { makeStyles, Typography, List, ListItem, Button} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Home, Team} from '../../..';
import DropDown from '../../DropDown';

const useStyles = makeStyles({
    container: {
        height: '400px',
        width: '100%',
        padding: '30px',
        boxSizing: 'border-box',
        borderTop: '2px solid #6fc38f'
    },
});

const Hackathon: React.FC = () => {
    const classes = useStyles();
	return (
        <div className={classes.container}>
            hi
            <DropDown/>
        </div>
	);
};

export default Hackathon;
