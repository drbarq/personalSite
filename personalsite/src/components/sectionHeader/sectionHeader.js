import React from 'react';
import styles from './sectionHeader.module.css';

function SectionHeader({ titleOne, titleTwo, image }) {
	return (
		<div className={styles.sectionHeaderContainer}>
			<div className={styles.titleOne}>{titleOne}</div>
			{titleTwo ? <div className={styles.titleTwo}>{titleTwo}</div> : null}
			{image ? (
				<div className={styles.bannerImg}>
					<img alt="subheading banner" src={image} />{' '}
				</div>
			) : null}
		</div>
	);
}

export default SectionHeader;
