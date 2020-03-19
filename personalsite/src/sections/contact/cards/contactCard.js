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



export default function ContactCard(props) {
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