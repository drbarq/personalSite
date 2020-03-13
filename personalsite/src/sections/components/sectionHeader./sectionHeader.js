import React from 'react';
import styles from './sectionHeader.module.css';

function SectionHeader({ titleOne, titleTwo }) {
	return (
		<div className={styles.sectionHeaderContainer}>
			<div className={styles.titleOne}>{titleOne}</div>
			<div className={styles.titleTwo}>{titleTwo}</div>
		</div>
	);
}

export default SectionHeader;
