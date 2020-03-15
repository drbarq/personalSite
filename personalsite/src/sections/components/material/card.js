import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import YouTubeIcon from '@material-ui/icons/YouTube';

import styles from './card.module.css';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
		boxShadow: 'none'
		// padding: '0px'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		// fontSize: 14
		fontVariant: 'small-caps',
		letterSpacing: '2px'
		// textTransform: 'small-caps'
	},
	pos: {
		marginBottom: 12
	},
	text: {
		paddingLeft: '.5rem',
		paddingBottom: '.5rem',
		fontSize: 'small'
	},
	cardContent: {
		padding: '0px'
	},
	icons: {
		fontSize: '4rem'
	}
});

export default function SimpleCard() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root}>
			<CardContent className={classes.cardContent}>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					about:
				</Typography>
				<Typography className={classes.text} variant="body2" component="p">
					Lost and Found is an application that connects people through their
					lost items. Users of Lost and Found are able to register their items
					and generate custom QR Codes which they can then place on their items,
					similar to a name tag.
				</Typography>

				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					skills:
				</Typography>
				{/* <Typography variant="h5" component="h6"> */}
				<Typography className={classes.text} variant="body2" component="p">
					React {bull} Ruby on Rails {bull} firebase {bull} SQL {bull} QR Codes{' '}
					{bull} Flex {bull} Twilio {bull} SMS {bull} Heroku
				</Typography>
				<Typography className={classes.title} color="textSecondary">
					links:
				</Typography>
				<div className={styles.linksContainer}>
					<div className={styles.linkLabel}>
						<YouTubeIcon className={classes.icons} />
						<Typography className={classes.text} variant="body2" component="p">
							YouTube
						</Typography>
					</div>
				</div>

				<Typography variant="body2" component="p">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			</CardContent>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions>
		</Card>
	);
}
