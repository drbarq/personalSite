import React from 'react';

import styles from './experience.module.css';

import SectionHeader from '../../components/sectionHeader/sectionHeader';

import ExpansionPanelATT from './expansionPanel/expansionPanelATT';
import ExpansionPanelSG from './expansionPanel/expansionPanelSG';
// import CustomExpansionPanel from './expansionPanel/expansionPanelATT';
import CustomExpansionPanel from './expansionPanel/expansionPanel';

import SGCard from './cards/sgCard';
import ATTCard from './cards/attCard';

import ExperienceComponent from './experienceComponent';

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
			<CustomExpansionPanel
				jobTitle="Sr Account Executive"
				dateRange="Feb 2016 - October 2017: Denver, CO"
				jobCard={<SGCard />}
			/>
		</div>
	</div>
);

export default function Experience() {
	return (
		<div className={styles.sectionContainer}>
			<SectionHeader titleOne="always be closing" titleTwo="Experience" />
			<div className={styles.contentContainer}>
				<div className={styles.experienceContainer}>
					{/* <ExperienceComponent
						companyName="SendGrid"
						jobTitle="Sr Account Executive"
						dateRange="Feb 2016 - October 2017: Denver, CO"
						jobCard={<SGCard />}
					/> */}
					<ExperienceComponent
						companyName="AT&T"
						jobs={[
							{
								jobTitle: 'Enterprise Account Manager II',
								dateRange: 'Aug 2011 – Feb 2016: Denver, CO',
								jobCard: <ATTCard />
							},
							{
								jobTitle: 'Business Sales Leadership Development Program',
								dateRange: 'April 2011 – August 2011: Atlanta, GA',
								jobCard: <ATTCard />
							}
						]}
					/>
					{experienceContainerATT}
				</div>
			</div>
		</div>
	);
}
