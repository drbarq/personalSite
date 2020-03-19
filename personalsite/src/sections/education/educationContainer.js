import React from 'react';

import styles from './education.module.css';

export default function EducationContainer({
	schoolName,
	educationDate,
	degree,
	location
}) {
	return (
		<div className={styles.schoolContainer}>
			<div className={styles.schoolNameContainer}>
				<div className={styles.schoolName}>{schoolName}</div>
				<div className={styles.educationDate}>{educationDate}</div>
			</div>
			<div className={styles.additionalInfoContainer}>
				<div className={styles.degree}>{degree}</div>
				<div className={styles.location}>{location}</div>
			</div>
		</div>
	);
}
