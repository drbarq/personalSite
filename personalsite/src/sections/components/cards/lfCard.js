import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import lfLogo from '../../../images/lflogo.svg';
import styles from './card.module.css';
import { faVimeoV, faGithub } from '@fortawesome/fontawesome-free-brands';

const useStyles = makeStyles({
	root: {
		width: '100%',
		height: '95%',
		boxShadow: 'none',
		display: 'flex',
		flexDirection: 'column',
		overflow: 'auto'
	},
	bullet: {
		display: 'inline-block',
		margin: '0 2px',
		transform: 'scale(0.8)'
	},
	title: {
		fontVariant: 'small-caps',
		letterSpacing: '2px'
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
	// const classes = useStyles(styles);
	const classes = useStyles();
	const bull = <span className={styles.bullet}>•</span>;

	return (
		<Card className={styles.root}>
			<CardContent className={styles.cardContent}>
				<div className={styles.bannerImg}>
					<img src={lfLogo} />
				</div>

				<Typography className={styles.title} color="textSecondary" gutterBottom>
					about:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					Lost and Found is an application that connects people through their
					lost items. Users of Lost and Found are able to register their items
					and generate custom QR Codes which they can then place on their items,
					similar to a name tag.
				</Typography>

				<Typography className={styles.title} color="textSecondary" gutterBottom>
					skills:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					React {bull} Ruby on Rails {bull} firebase {bull} SQL {bull} QR Codes{' '}
					{bull} Flex {bull} Twilio {bull} SMS {bull} Heroku
				</Typography>
				<Typography className={styles.title} color="textSecondary">
					links:
				</Typography>
				<div className={styles.linksContainer}>
					<a href="https://vimeo.com/351468041" target="_blank">
						<div className={styles.linkLabel}>
							<FontAwesomeIcon icon={faVimeoV} className={styles.icons} />
							<Typography className={styles.link} variant="body2" component="p">
								Video Demo
							</Typography>
						</div>
					</a>

					<a
						href="https://github.com/drbarq/lost-and-found-frontEnd"
						target="_blank"
					>
						<div className={styles.linkLabel}>
							<FontAwesomeIcon icon={faGithub} className={styles.icons} />
							<Typography className={styles.link} variant="body2" component="p">
								FrontEnd
							</Typography>
						</div>
					</a>

					<a
						href="https://github.com/drbarq/lost-and-found-backEnd-api"
						target="_blank"
					>
						<div className={styles.linkLabel}>
							<FontAwesomeIcon icon={faGithub} className={styles.icons} />
							<Typography className={styles.link} variant="body2" component="p">
								BackEnd
							</Typography>
						</div>
					</a>
				</div>
			</CardContent>
		</Card>
	);
}
