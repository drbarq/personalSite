import React from './node_modules/react';
import styles from './backstory.module.css';

const backstory = (
	<div className={styles.backstoryContainer}>
		<h3 className={styles.h3}>Back Story</h3>
		<div className={styles.textContainer}>
			<p className={styles.schoolText}>
				I am a software developer with a weird story. Scroll down for a long
				story long
			</p>
		</div>
	</div>
);

export default backstory;
