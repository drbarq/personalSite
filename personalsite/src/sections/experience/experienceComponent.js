import React from 'react';
import CustomExpansionPanel from './expansionPanel/expansionPanel';

import styles from './experience.module.css';

export default function ExperienceComponent(props) {
	function createJobInfo(jobs) {
		let jobList = [];
		// let jobLength = jobs.length - 1;

		jobs.map((job, index) => {
			console.log(job);

			jobList.push(
				<CustomExpansionPanel
					jobTitle={job.jobTitle}
					dateRange={job.dateRange}
					jobCard={job.jobCard}
				/>
			);
		});

		console.log(jobList);
		return jobList;
	}

	// console.log(props);
	return (
		<div className={styles.companyContainer}>
			<div className={styles.companyNameContainer}>
				<div className={styles.companyName}>{props.companyName}</div>
			</div>

			<div className={styles.additionalInfoContainer}>
				<CustomExpansionPanel jobs={props.jobs} />
				{/* {createJobInfo(props.jobs)} */}
			</div>
		</div>
	);
}
