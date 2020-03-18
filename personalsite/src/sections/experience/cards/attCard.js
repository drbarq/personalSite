import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';

import styles from './card.module.css';

export default function attCard() {
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
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					skills:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					the best stuff really good stuff
				</Typography>
				<Typography className={styles.title} color="textSecondary" gutterBottom>
					about:
				</Typography>
				<Typography className={styles.text} variant="body2" component="p">
					HWELLO IT WAS REALLY COOL
				</Typography>
			</div>
		</Card>
	);
}
