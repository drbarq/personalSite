import React from 'react';

import styles from './experience.module.css';

import SectionHeader from '../../components/sectionHeader/sectionHeader';

import ExpansionPanel from './expansionPanel/expansionPanel';

const experienceContainer = (
	<div className={styles.experienceContainer}>
		<div className={styles.subtitleContainer}>
			<div className={styles.experienceTitle}>AT&T</div>
		</div>

		<div className={styles.lineOne}>
			<div className={styles.experienceSubline}>
				Enterprise Account Manager II
			</div>
			<div className={styles.educationDate}>Premier Client Group - </div>
		</div>
		<div className={styles.lineTwo}>
			<div className={styles.degree}>Put Expansion panel here</div>
			{/* <button>Click here for more info</button> */}
		</div>

		<div className={styles.subtitleContainer}>
			<div className={styles.experienceTitle}>SendGrid</div>
		</div>

		<div className={styles.lineOne}>
			<div className={styles.experienceSubline}>Sr. Account Executive</div>
			<div className={styles.educationDate}>Feb 2016 - Oct 2017</div>
		</div>
		<div className={styles.lineTwo}>
			<div className={styles.degree}>Put Expansion panel here</div>
			{/* <button>Click here for more info</button> */}
		</div>
	</div>
);

export default function Experience() {
	return (
		<div className={styles.sectionContainer}>
			<SectionHeader titleOne="always be closing" titleTwo="Expereince" />
			<div className={styles.contentContainer}>
				{experienceContainer}
				{/* <ExpansionPanel /> */}
			</div>
		</div>
	);
}
