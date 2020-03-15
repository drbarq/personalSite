import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import YouTubeIcon from '@material-ui/icons/YouTube';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCheckSquare, faCoffee } from '@fortawesome/fontawesome-free-solid';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {
	faVimeoSquare,
	faVimeoV,
	faGithub
} from '@fortawesome/fontawesome-free-brands';

import styles from './card.module.css';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
		boxShadow: 'none',
		display: 'flex',
		flexDirection: 'column'
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
		fontSize: '3.5rem'
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
						<a href="https://vimeo.com/351468041" target="_blank">
							<FontAwesomeIcon icon={faVimeoV} className={classes.icons} />
							<Typography
								className={classes.text}
								variant="body2"
								component="p"
							>
								Video
							</Typography>
						</a>
					</div>
					<div className={styles.linkLabel}>
						<a
							href="https://github.com/drbarq/lost-and-found-frontEnd"
							target="_blank"
						>
							<FontAwesomeIcon icon={faGithub} className={classes.icons} />
							<Typography
								className={classes.text}
								variant="body2"
								component="p"
							>
								FrontEnd
							</Typography>
						</a>
					</div>
					<div className={styles.linkLabel}>
						<a
							href="https://github.com/drbarq/lost-and-found-backEnd-api"
							target="_blank"
						>
							<FontAwesomeIcon icon={faGithub} className={classes.icons} />
							<Typography
								className={classes.text}
								variant="body2"
								component="p"
							>
								BackEnd
							</Typography>
						</a>
					</div>
				</div>

				{/* <Typography variant="body2" component="p">
					well meaning and kindly.
					<br />
					{'"a benevolent smile"'}
				</Typography>
			<CardActions>
				<Button size="small">Learn More</Button>
			</CardActions> */}
			</CardContent>
		</Card>
	);
}
