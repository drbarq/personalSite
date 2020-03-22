import React from 'react';

import styles from './education.module.css';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import EducationContainer from './educationContainer';

export default function Education() {
	return (
		<div id="education" className={styles.sectionContainer}>
			<SectionHeader titleOne="Never Stop Learning" titleTwo="Education" />
			<div className={styles.contentContainer}>
				<div className={styles.experienceContainer}>
					<EducationContainer
						schoolName="Pennsylvania State University"
						educationDate="Sept 2006 - Dec 2010"
						degree="Bachelor of Science: Finance"
						location="State College, PA"
					/>
					<EducationContainer
						schoolName="Flatiron School"
						educationDate="April 2019 - Aug 2019"
						degree="Software Engineering Bootcamp"
						location="Denver, CO"
					/>
				</div>
			</div>
		</div>
	);
}
