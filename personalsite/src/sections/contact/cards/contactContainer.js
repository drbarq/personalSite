import React from 'react';
import styles from '../contact.module.css';

export default function ContactContainer() {
	return (
		<div className={styles.contactContainer}>
			<div className={styles.contactTitleContainer}>
				<div className={styles.status}>📨 Contact Me 📞</div>
			</div>
			<div className={styles.additionalInfoContainer}>
				<div className={styles.statement}></div>
			</div>
		</div>
	);
}
