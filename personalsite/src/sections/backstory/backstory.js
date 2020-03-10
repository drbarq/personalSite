import React from 'react';
import styles from './backstory.module.css';

const backstory = (
	<div className={styles.backstoryContainer}>
		<h3 className={styles.h3}>Back Story</h3>
		<div className={styles.textDiv}>
			<div className={styles.schoolTextDiv}>
				<div className={styles.schoolLine1}>
					<h6>University of Pennsylvania</h6>
					<p>Sept 2006 - Dec 2010</p>
				</div>
				{/* <div className={styles.schoolLine2}>
					<h8>B.S. Finance</h8>
				</div> */}
			</div>
		</div>
	</div>
);

export default backstory;
