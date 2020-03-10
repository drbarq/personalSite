import React, { Fragment } from 'react';
import joeBanner from '../../images/joeBanner.jpg';

import styles from './banner.module.css';

const banner = (
	<div className={styles.bannerContainer}>
		<h1 className={styles.h1}>Joe Tustin</h1>
		<img className={styles.bannerImg} src={joeBanner} />
	</div>
);

export default banner;
