import React from 'react';

import styles from './experience.module.css';

import SectionHeader from '../../components/sectionHeader/sectionHeader';

import ExpansionPanelATT from './expansionPanel/expansionPanelATT';

const experienceContainer = (
	<div className={styles.companyContainer}>
		<div className={styles.companyNameContainer}>
			<div className={styles.companyName}>AT&T</div>
		</div>

		<div className={styles.additionalInfoContainer}>
			<ExpansionPanelATT />
		</div>
	</div>
);

export default function Experience() {
	return (
		<div className={styles.sectionContainer}>
			<SectionHeader titleOne="always be closing" titleTwo="Experience" />
			<div className={styles.contentContainer}>
				<div className={styles.experienceContainer}>{experienceContainer}</div>

				{/* <ExpansionPanel />s */}
			</div>
		</div>
	);
}

{
	/* <div className={styles.companyNameContainer}>
			<div className={styles.companyName}>SendGrid</div>
		</div>

		<div className={styles.lineOne}>
			<div className={styles.experienceSubline}>Sr. Account Executive</div>
			<div className={styles.educationDate}>Feb 2016 - Oct 2017</div>
		</div>
		<div className={styles.lineTwo}>
			<div className={styles.degree}>Put Expansion panel here</div>

		</div> */
}
