import React from 'react';
import joeBanner from '../../images/joeBanner.jpg';

import styles from './banner.module.css';

function Banner() {
	return (
		<div className={styles.bannerContainer}>
			{/* <h3 className={styles.h3}>Joe Tustin</h3> */}
			<img className={styles.bannerImg} src={joeBanner} />
		</div>
	);
}

export default Banner;
