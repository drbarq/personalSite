import React from 'react';
import styles from '../contact.module.css';

export default function StatusCard({ status, postDate, statement }) {
	return (
		<div className={styles.statementContainer}>
			<div className={styles.statusContainer}>
				<div className={styles.status}>{status}</div>
				<div className={styles.postDate}>{postDate}</div>
			</div>
			<div className={styles.additionalInfoContainer}>
				<div className={styles.statement}>{statement}</div>
			</div>
		</div>
	);
}
