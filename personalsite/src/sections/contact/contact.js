import React from 'react';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import styles from './contact.module.css';
import ContactLink from './cards/contactLink';
import StatusCard from './cards/statusCard';
import ContactContainer from './cards/contactContainer';

export default function Contact() {
	return (
		<div className={styles.sectionContainer}>
			<SectionHeader titleOne="1-800-Joe-Tustin" titleTwo="Contact" />
			<div className={styles.contentContainer}>
				<StatusCard
					status="Current Status: Open to Opportunities!"
					postDate="3.20.2020"
					statement="Thank you for checking out my site! I am currently seeking
					opportunities in Denver, CO for Front-End / FullStack roles. Please
					reach out if you think I might be a fit for your team!"
				/>
				<ContactContainer />
				<ContactLink />
				{/* <div>Hello</div> */}
			</div>
		</div>
	);
}
