import React from 'react';
import styles from './projects.module.css';

import Projects from './projects';
import SectionHeader from '../components/sectionHeader/sectionHeader';

function ProjectsContainer() {
	return (
		<div className={styles.projectsContainer}>
			<SectionHeader
				titleOne={'then I went to school'}
				titleTwo={'Flatiron School Projects'}
			/>
			<Projects />
		</div>
	);
}

export default ProjectsContainer;
