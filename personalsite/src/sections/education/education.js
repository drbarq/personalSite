import React from 'react';

import styles from './education.module.css';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import EducationContainer from './educationContainer';

export default function Education() {
	return (
		<div className={styles.sectionContainer}>
			<SectionHeader titleOne="Never Stop Learning" titleTwo="Education" />
			<div className={styles.contentContainer}>
				<div className={styles.experienceContainer}>
					<EducationContainer />
				</div>
			</div>
		</div>
	);
}
