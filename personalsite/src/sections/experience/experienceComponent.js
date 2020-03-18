import React from 'react';
import CustomExpansionPanel from './expansionPanel/expansionPanel';

import styles from './experience.module.css';

export default function ExperienceComponent(props) {
	return (
		<div className={styles.companyContainer}>
			<div className={styles.companyNameContainer}>
				<div className={styles.companyName}>{props.companyName}</div>
			</div>
			<div className={styles.additionalInfoContainer}>
				<CustomExpansionPanel jobs={props.jobs} />
			</div>
		</div>
	);
}
