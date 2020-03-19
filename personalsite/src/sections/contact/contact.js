import React from 'react';
import SectionHeader from '../../components/sectionHeader/sectionHeader';
import styles from './contact.module.css';
import { StylesProvider } from '@material-ui/core';

export default function Contact() {
	return (
		<div className={styles.sectionContainer}>
			<SectionHeader titleOne="1-800-Joe-Tustin" titleTwo="Contact" />
			<div className={styles.contentContainer}>
				<div className={styles.statementContainer}>
					<div className={styles.statusContainer}>
						<div className={styles.status}>
							Current Status: Looking for work!
						</div>
						<div className={styles.postDate}>3.20.2020</div>
					</div>
					<div className={styles.additionalInfoContainer}>
						<div className={styles.statement}>
							Thank you for checking out my site! I am currently seeking
							opportunities in Denver, CO for Front-End / FullStack roles.
							Please reach out if you think I might be a fit for your team!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
