import React from 'react';
import styles from './experience.module.css';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import SGCard from './cards/sgCard';
import ATTCardDEN from './cards/attCardDEN';
import ATTCardATL from './cards/attCardATL';
import ExperienceComponent from './experienceComponent';

export default function Experience() {
	return (
		<div id="experience" className={styles.sectionContainer}>
			<SectionHeader titleOne="always be closing" titleTwo="Experience" />
			<div className={styles.contentContainer}>
				<div className={styles.experienceContainer}>
					<ExperienceComponent
						companyName="SendGrid"
						jobs={[
							{
								jobTitle: 'Sr Account Executive',
								dateRange: 'Feb 2016 - October 2017: Denver, CO',
								jobCard: <SGCard />
							}
						]}
					/>
					<ExperienceComponent
						companyName="AT&T"
						jobs={[
							{
								jobTitle: 'Enterprise Account Manager II',
								dateRange: 'Aug 2011 – Feb 2016: Denver, CO',
								jobCard: <ATTCardDEN />
							},
							{
								jobTitle: 'Business Sales Leadership Development Program',
								dateRange: 'April 2011 – August 2011: Atlanta, GA',
								jobCard: <ATTCardATL />
							}
						]}
					/>
				</div>
			</div>
		</div>
	);
}
