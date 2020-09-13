import React from 'react';
import {
	makeStyles,
	Card,
	CardHeader,
	CardMedia,
	CardContent,
	CardActions,
	Theme,
	createStyles,
	Typography,
	IconButton,
	Collapse
} from '@material-ui/core';
import { ExpandMore, Email, LinkedIn, GitHub } from '@material-ui/icons';
import clsx from 'clsx';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		container: {
			height: '50px',
			width: '100%',
			// backgroundColor: '#6fc38f',
			marginBottom: '10%',
			borderRadius: '10px'
			// border: '2px solid #6fc38f'
		},
		media: {
			// height: '100%',
			width: '100px',
			// paddingLeft: '56.25%', // 16:9
			objectFit: 'contain'
		},
		expand: {
			transform: 'rotate(0deg)',
			marginLeft: 'auto',
			transition: theme.transitions.create('transform', {
				duration: theme.transitions.duration.shortest
			})
		},
		expandOpen: {
			transform: 'rotate(180deg)'
		},
		cardTitle: {
			marginLeft: '10px'
		}
	})
);

interface TeamMemberCardTitle {
	title: string;
	portrait: string;
	description: string;
	email: string;
	linkedInUrl: string;
	gitHubUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardTitle> = ({
	title,
	portrait,
	description,
	email,
	linkedInUrl,
	gitHubUrl
}) => {
	const classes = useStyles();
	const [expanded, setExpanded] = React.useState(false);

	const handleExpandClick = () => {
		setExpanded(!expanded);
	};

	return (
		<div className={classes.container}>
			<Card>
				<CardHeader
					action={
						<IconButton
							className={clsx(classes.expand, {
								[classes.expandOpen]: expanded
							})}
							onClick={handleExpandClick}
							aria-expanded={expanded}
							aria-label="show more"
						>
							<ExpandMore />
						</IconButton>
					}
					title={title}
				/>
				<Collapse in={expanded} timeout="auto" unmountOnExit>
					<div
						style={{
							display: 'flex'
							// alignItems: 'center',
							// marginLeft: '100px'
						}}
					>
						<CardMedia className={classes.media} image={portrait} />
						<CardContent>
							<Typography paragraph>{description}</Typography>
						</CardContent>
					</div>
					<CardActions disableSpacing>
						<IconButton aria-label="Email" href={email}>
							<Email />
						</IconButton>
						<IconButton aria-label="LinkedIn" href={linkedInUrl}>
							<LinkedIn />
						</IconButton>
						<IconButton aria-label="GitHub" href={gitHubUrl}>
							<GitHub />
						</IconButton>
					</CardActions>
				</Collapse>
			</Card>
		</div>
	);
};

export default TeamMemberCard;
