import React from 'react';
import styles from './backstory.module.css';

const backstory = (
	<div className={styles.backstoryContainer}>
		<div className={styles.titleLine}>What I did in the past</div>
		<div className={styles.educationContainer}>
			<div className={styles.educationTitle}>Education</div>
			<div className={styles.lineOne}>
				<div className={styles.educationSubline}>
					University of Pennsylvania
				</div>
				<div className={styles.educationDate}>Sept 2006 - Dec 2010</div>
			</div>
			<div className={styles.lineTwo}>
				<div className={styles.degree}>B.S. Finance</div>
				<button>Click here for more info</button>
			</div>
		</div>

		<div className={styles.experienceContainer}>
			<div className={styles.experienceTitle}>Experience</div>
			<div className={styles.lineOne}>
				<div className={styles.experienceSubline}>AT&T</div>
				<div className={styles.educationDate}>April 2011 - Feb 2016</div>
			</div>
			<div className={styles.lineTwo}>
				<div className={styles.degree}>
					Premier Client Group - Enterprise: Account Manager II
				</div>
				<button>Click here for more info</button>
			</div>

			<div className={styles.lineOne}>
				<div className={styles.experienceSubline}>SendGrid</div>
				<div className={styles.educationDate}>Feb 2016 - Oct 2017</div>
			</div>
			<div className={styles.lineTwo}>
				<div className={styles.degree}>Senior Account Executive</div>
				<button>Click here for more info</button>
			</div>
		</div>
	</div>
);

export default backstory;
