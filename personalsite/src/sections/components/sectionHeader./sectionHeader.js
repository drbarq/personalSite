import React from 'react';
import styles from './sectionHeader.module.css';

function SectionHeader({ titleOne, titleTwo }) {
	return (
		<div className={styles.sectionHeaderContainer}>
			<div className={styles.titleOne}>{titleOne}</div>
			{titleTwo ? <div className={styles.titleTwo}>{titleTwo}</div> : null}
		</div>
	);
}

export default SectionHeader;
