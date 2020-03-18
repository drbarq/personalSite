import React from 'react';
import CustomExpansionPanel from './expansionPanel/expansionPanel';

import styles from './experience.module.css';

export default function ExperienceComponent(props) {
	function createJobInfo(jobs) {
		let jobList = [];
		// let jobLength =
		console.log(jobs.length);
	}

	// console.log(props);
	return (
		<div className={styles.companyContainer}>
			<div className={styles.companyNameContainer}>
				<div className={styles.companyName}>{props.companyName}</div>
			</div>

			<div className={styles.additionalInfoContainer}>
				{createJobInfo(props.jobs)}
				<CustomExpansionPanel
					jobTitle={props.jobTitle}
					dateRange={props.dateRange}
					jobCard={props.jobCard}
				/>
			</div>
		</div>
	);
}
