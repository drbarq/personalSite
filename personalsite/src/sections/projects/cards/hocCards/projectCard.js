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

	function linkIconGenerator(links) {
		let linksList = [];

		Object.keys(links).map((linkName, index) => {
			if (linkName === 'youTube') {
				linksList.push(
					youTubeLink(links[linkName].link, links[linkName].title, index)
				);
			} else if (linkName === 'gitHub') {
				linksList.push(
					gitHubLink(links[linkName].link, links[linkName].title, index)
				);
			}
		});

		return linksList;
		// links.map((link, index) => {
		// 	console.log(link, index);
		// });

		// if (links.youTube) {
		// 	linksList.push(
		// 		<a href={links.youTube.link} target="_blank" key={linksList.length}>
		// 			<div className={styles.linkLabel}>
		// 				<FontAwesomeIcon icon={faYoutube} className={styles.icons} />
		// 				<Typography className={styles.link} variant="body2" component="p">
		// 					{links.youTube.title}
		// 				</Typography>
		// 			</div>
		// 		</a>
		// 	);
		// } else if (links.gitHub) {
		// 	linksList.push(
		// 		<a href={links.gitHub.link} target="_blank" key={linksList.length}>
		// 			<div className={styles.linkLabel}>
		// 				<FontAwesomeIcon icon={faGithub} className={styles.icons} />
		// 				<Typography className={styles.link} variant="body2" component="p">
		// 					{links.gitHub.title}
		// 				</Typography>
		// 			</div>
		// 		</a>
		// 	);
		// }

		// links.forEach(link => {
		// 	console.log(link);
		// });

		// links.map((link, index) => {
		// 	if (link.youTube.exists()) {
		// 		linksList.push(
		// 			<a href={link.link} target="_blank" key={index}>
		// 				<div className={styles.linkLabel}>
		// 					<FontAwesomeIcon icon={faYoutube} className={styles.icons} />
		// 					<Typography className={styles.link} variant="body2" component="p">
		// 						{link.title}
		// 					</Typography>
		// 				</div>
		// 			</a>
		// 		);
		// 	}
		// 	// console.log(link);
		// });

		// 	<a href="https://www.youtube.com/watch?v=PwzsgzlYaZY" target="_blank">
		// 	<div className={styles.linkLabel}>
		// 		<FontAwesomeIcon icon={faYoutube} className={styles.icons} />
		// 		<Typography className={styles.link} variant="body2" component="p">
		// 			Video Demo
		// 		</Typography>
		// 	</div>
		// </a>

		// console.log(linksList);
		// return linksList;
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
					{linkIconGenerator(props.links)}

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
