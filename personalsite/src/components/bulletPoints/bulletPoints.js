import React from 'react';
import styles from './bulletPoints.module.css';

export default function skillsBulletPoints({ skills }) {
	let skillsLength = skills.length - 1;
	let bulletList = [];

	skills.forEach((skill, index) => {
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
