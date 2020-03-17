import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './projectCard.module.css';

import {
	faVimeoV,
	faGithub,
	faYoutube
} from '@fortawesome/fontawesome-free-brands';

export default function ProjectCard(props) {
	// props:

	// console.log(props);
	const inputs = {
		mainTitle: '🛴🕵🏻‍♂️ Scooter Sleuth 🕵🏻‍♀️🛴',
		aboutText:
			'We put a man on the moon but still need to switch between apps to find the closest electric scooter. Not anymore!! Scooter Sleuth aggregates scooter share apps into one map rendered based on the users location and available scooters.',
		skills: ['Ruby on Rails', 'JavaScript', 'Bootstrap', 'Heroku'],
		links: {
			youtube: {
				link: '',
				title: 'Video Demo'
			},
			github: {
				link: '',
				title: ''
			},
			vimeo: {
				link: '',
				title: ''
			}
		}
	};

	function linkIconGenerator(links) {
		console.log(links);

		// 	<a href="https://www.youtube.com/watch?v=PwzsgzlYaZY" target="_blank">
		// 	<div className={styles.linkLabel}>
		// 		<FontAwesomeIcon icon={faYoutube} className={styles.icons} />
		// 		<Typography className={styles.link} variant="body2" component="p">
		// 			Video Demo
		// 		</Typography>
		// 	</div>
		// </a>
	}

	function skillsBulletPoints(skills) {
		let skillsLength = skills.length - 1;
		let bulletList = [];

		skills.map((skill, index) => {
			const bullet = (
				<span key={index} className={styles.bullet}>
					•
				</span>
			);

			bulletList.push(skill);
			if (index < skillsLength) {
				bulletList.push(bullet);
			}
		});

		return bulletList;
	}

	// const bullet = <span className={styles.bullet}>•</span>;

	return (
		<Card className={styles.root}>
			<div className={styles.cardContent}>
				<div className={styles.titleContainer}>
					<Typography
						className={styles.mainTitle}
						color="textPrimary"
						gutterBottom
					>
						{props.mainTitle}
					</Typography>
				</div>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					about:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					{props.aboutText}
				</Typography>

				<Typography className={styles.title} color="textSecondary" gutterBottom>
					skills:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					{skillsBulletPoints(props.skills)}
				</Typography>
				<Typography className={styles.title} color="textSecondary">
					links:
				</Typography>

				<div className={styles.linksContainer}>
					{/* {linkIconGenerator(props.links)} */}

					<a href="https://www.youtube.com/watch?v=PwzsgzlYaZY" target="_blank">
						<div className={styles.linkLabel}>
							<FontAwesomeIcon icon={faYoutube} className={styles.icons} />
							<Typography className={styles.link} variant="body2" component="p">
								Video Demo
							</Typography>
						</div>
					</a>

					<a
						href="https://github.com/drbarq/scootersleuth-mod-2"
						target="_blank"
					>
						<div className={styles.linkLabel}>
							<FontAwesomeIcon icon={faGithub} className={styles.icons} />
							<Typography className={styles.link} variant="body2" component="p">
								Repo
							</Typography>
						</div>
					</a>
				</div>
			</div>
		</Card>
	);
}
