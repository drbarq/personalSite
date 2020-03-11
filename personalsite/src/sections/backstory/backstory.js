import React from 'react';
import styles from './backstory.module.css';

const backstory = (
	<div className={styles.backstoryContainer}>
		<div className={styles.educationContainer}>
			<div className={styles.titleLine}>What I did in the past</div>
			<div className={styles.educationTitle}>Education</div>
			<div className={styles.lineOne}>
				<div className={styles.educationSubline}>
					University of Pennsylvania
				</div>
				<div className={styles.educationDate}>Sept 2006 - Dec 2010</div>
			</div>
			<div className={styles.lineTwo}>
				<div className={styles.educationtTitle}>B.S. Finance</div>
				<button>Click here for more info</button>
			</div>
		</div>
	</div>
);

export default backstory;
