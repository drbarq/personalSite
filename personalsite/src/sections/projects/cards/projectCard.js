import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './projectCard.module.css';

import {
	faVimeoV,
	faGithub,
	faYoutube,
	faFirefox
} from '@fortawesome/fontawesome-free-brands';

export default function ProjectCard(props) {
	function youTubeLink(link, title, key) {
		return (
			<a href={link} target="_blank" key={key}>
				<div className={styles.linkLabel}>
					<FontAwesomeIcon icon={faYoutube} className={styles.icons} />
					<Typography className={styles.link} variant="body2" component="p">
						{title}
					</Typography>
				</div>
			</a>
		);
	}

	function gitHubLink(link, title, key) {
		return (
			<a href={link} target="_blank" key={key}>
				<div className={styles.linkLabel}>
					<FontAwesomeIcon icon={faGithub} className={styles.icons} />
					<Typography className={styles.link} variant="body2" component="p">
						{title}
					</Typography>
				</div>
			</a>
		);
	}

	function vimeoLink(link, title, key) {
		return (
			<a href={link} target="_blank" key={key}>
				<div className={styles.linkLabel}>
					<FontAwesomeIcon icon={faVimeoV} className={styles.icons} />
					<Typography className={styles.link} variant="body2" component="p">
						{title}
					</Typography>
				</div>
			</a>
		);
	}

	function webLink(link, title, key) {
		return (
			<a href={link} target="_blank" key={key}>
				<div className={styles.linkLabel}>
					<FontAwesomeIcon icon={faFirefox} className={styles.icons} />
					<Typography className={styles.link} variant="body2" component="p">
						{title}
					</Typography>
				</div>
			</a>
		);
	}

	function linkIconGenerator(links) {
		let linksList = [];

		Object.keys(links).map((linkName, index) => {
			console.log('made it here');
			if (linkName === 'youTube') {
				linksList.push(
					youTubeLink(links[linkName].link, links[linkName].title, index)
				);
			} else if (linkName === 'gitHub') {
				linksList.push(
					gitHubLink(links[linkName].link, links[linkName].title, index)
				);
			} else if (linkName === 'gitHubF') {
				linksList.push(
					gitHubLink(links[linkName].link, links[linkName].title, index)
				);
			} else if (linkName === 'gitHubB') {
				linksList.push(
					gitHubLink(links[linkName].link, links[linkName].title, index)
				);
			} else if (linkName === 'vimeo') {
				linksList.push(
					vimeoLink(links[linkName].link, links[linkName].title, index)
				);
			} else if (linkName === 'web') {
				linksList.push(
					webLink(links[linkName].link, links[linkName].title, index)
				);
			}
		});
		return linksList;
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
					{linkIconGenerator(props.links)}
				</div>
			</div>
		</Card>
	);
}

const inputsExample = {
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
