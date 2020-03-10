import React from 'react';
import styles from './about.module.css';

const about = (
	<div className={styles.aboutContainer}>
		<h3 className={styles.h3}>About</h3>
		<div className={styles.textContainer}>
			<p className={styles.aboutText}>
				I am a software developer with a weird story. Scroll down .... if you
				dare
			</p>
		</div>
	</div>
);

export default about;
