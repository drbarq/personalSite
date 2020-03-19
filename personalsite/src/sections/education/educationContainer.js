import React from 'react';

import styles from './education.module.css';

export default function EducationContainer() {
	return (
		<div className={styles.schoolContainer}>
			<div className={styles.schoolNameContainer}>
				<div className={styles.schoolName}>University of Pennsylvania</div>
				<div className={styles.educationDate}>Sept 2006 - Dec 2010</div>
			</div>
			<div className={styles.additionalInfoContainer}>
				<div className={styles.degree}>Bachelor of Science: Finance</div>
				<div className={styles.degree}>State College, PA</div>
			</div>
		</div>
	);
}
