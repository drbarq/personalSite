import React from 'react';
import styles from '../contact.module.css';
import LinkComponent from './linkComponent';

import { faAt } from '@fortawesome/free-solid-svg-icons';

export default function ContactContainer() {
	return (
		<div className={styles.contactContainer}>
			<div className={styles.contactTitleContainer}>
				<div className={styles.title}>📨 Contact Me 📞</div>
			</div>
			<div className={styles.contactLinksContainer}>
				<LinkComponent
					link="mailto:J.Tustin@gmail.com?subject=Job Offer: $500K Salary"
					title="Email Me"
					icon={faAt}
				/>
				<div className={styles.statement}></div>
			</div>
		</div>
	);
}
