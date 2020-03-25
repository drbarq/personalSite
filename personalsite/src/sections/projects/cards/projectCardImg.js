import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LinkComponentGenerator from '../../../components/linkComponent/linkComponentGenerator';

import styles from './projectCard.module.css';

import {
	faVimeoV,
	faGithub,
	faYoutube,
	faFirefox
} from '@fortawesome/fontawesome-free-brands';

export default function ProjectCard(props) {
	function skillsBulletPoints(skills) {
		let skillsLength = skills.length - 1;
		let bulletList = [];

		skills.map((skill, index) => {
			const bullet = (
				<span key={index} className={styles.bullet}>
					•
				</span>
			);

			bulletList.push(' ', skill, ' ');
			if (index < skillsLength) {
				bulletList.push(bullet);
			}
		});

		return bulletList;
	}

	return (
		<Card className={styles.root}>
			<div className={styles.cardContent}>
				<div className={styles.titleContainer}>
					<img src={props.logo} />
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
					<LinkComponentGenerator links={props.links} />
				</div>
			</div>
		</Card>
	);
}
