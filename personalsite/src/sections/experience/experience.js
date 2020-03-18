import React from 'react';

import styles from './experience.module.css';

import SectionHeader from '../../components/sectionHeader/sectionHeader';

import ExpansionPanelATT from './expansionPanel/expansionPanelATT';
import ExpansionPanelSG from './expansionPanel/expansionPanelSG';

const experienceContainerATT = (
	<div className={styles.companyContainer}>
		<div className={styles.companyNameContainer}>
			<div className={styles.companyName}>AT&T</div>
		</div>

		<div className={styles.additionalInfoContainer}>
			<ExpansionPanelATT />
		</div>
	</div>
);

const experienceContainerSG = (
	<div className={styles.companyContainer}>
		<div className={styles.companyNameContainer}>
			<div className={styles.companyName}>SendGrid</div>
		</div>

		<div className={styles.additionalInfoContainer}>
			<ExpansionPanelSG />
		</div>
	</div>
);

export default function Experience() {
	return (
		<div className={styles.sectionContainer}>
			<SectionHeader titleOne="always be closing" titleTwo="Experience" />
			<div className={styles.contentContainer}>
				<div className={styles.experienceContainer}>
					{experienceContainerSG}
					{experienceContainerATT}
				</div>
			</div>
		</div>
	);
}
