import React from 'react';
import styles from './sectionHeader.module.css';

function SectionHeader() {
	return (
		<div className={styles.backstoryContainer}>
			<div className={styles.titleLine}>About</div>
			<div className={styles.educationContainer}>
				<div className={styles.educationTitle}>Education</div>
			</div>
		</div>
	);
}

export default SectionHeader;
