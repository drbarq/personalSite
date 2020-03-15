import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lfLogo from '../../../images/lflogo.svg';

import styles from './card.module.css';
import {
	faVimeoV,
	faGithub,
	faYoutube
} from '@fortawesome/fontawesome-free-brands';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '100%',
		boxShadow: 'none',
		display: 'flex',
		flexDirection: 'column'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	mainTitle: {
		fontVariant: 'small-caps',
		letterSpacing: '2px',
		fontSize: 'x-large'
	},
	title: {
		fontVariant: 'small-caps',
		letterSpacing: '2px',
		fontSize: 'medium'
	},
	pos: {
		marginBottom: 12
	},
	text: {
		paddingLeft: '.5rem',
		paddingBottom: '.5rem',
		fontSize: 'medium'
	},
	cardContent: {
		padding: '0px'
	},
	link: {
		fontSize: 'small',
		alignSelf: 'center'
	}
});

export default function SimpleCard() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<Card className={classes.root}>
			<CardContent className={classes.cardContent}>
				<div className={styles.bannerImg}>
					<Typography
						className={classes.mainTitle}
						color="textPrimary"
						gutterBottom
					>
						MILLENNIAL TRANSLATION SERVICE
					</Typography>
				</div>
				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					about:
				</Typography>
				<Typography className={classes.text} variant="body2" component="p">
					The Millennial Translation Service is a Command Line Interface (CLI)
					application that translates and defines millennial slang so that you
					can keep up with the young’uns.
				</Typography>

				<Typography
					className={classes.title}
					color="textSecondary"
					gutterBottom
				>
					skills:
				</Typography>
				<Typography className={classes.text} variant="body2" component="p">
					Ruby on Rails {bull} Paired Programing {bull} Heroku {bull} REST API{' '}
					{bull} SQL
				</Typography>
				<Typography className={classes.title} color="textSecondary">
					links:
				</Typography>
				<div className={styles.linksContainer}>
					<a href="https://www.youtube.com/watch?v=xtSkpgMU4Ww" target="_blank">
						<div className={styles.linkLabel}>
							<FontAwesomeIcon icon={faYoutube} className={styles.icons} />
							<Typography
								className={classes.link}
								variant="body2"
								component="p"
							>
								Video Demo
							</Typography>
						</div>
					</a>

					<a
						href="https://github.com/drbarq/MILLENNIAL-TRANSLATION-SERVICE"
						target="_blank"
					>
						<div className={styles.linkLabel}>
							<FontAwesomeIcon icon={faGithub} className={styles.icons} />
							<Typography
								className={classes.link}
								variant="body2"
								component="p"
							>
								Repo
							</Typography>
						</div>
					</a>
				</div>
			</CardContent>
		</Card>
	);
}
