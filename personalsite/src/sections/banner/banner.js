import React from 'react';
import joeBanner from '../../images/joeBanner.jpg';

import styles from './banner.module.css';

const banner = (
	<div className={styles.bannerContainer}>
		{/* <h3 className={styles.h3}>Joe Tustin</h3> */}
		<img className={styles.bannerImg} src={joeBanner} />
	</div>
);

export default banner;
