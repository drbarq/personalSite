import React from 'react';
import styles from './backstory.module.css';

const backstory = (
	<div className={styles.backstoryContainer}>
		<h3 className={styles.h3}>Back Story</h3>
		<div className={styles.textDiv}>
			<div className={styles.schoolTextDiv}>
				<div className={styles.schoolLine1}>
					<h7>University of Pennsylvania</h7>
					<p>Sept 2006 - Dec 2010</p>
				</div>
				<div className={styles.schoolLine2}>
					<h6>B.S. Finance</h6>
				</div>
			</div>
		</div>
	</div>
);

export default backstory;
