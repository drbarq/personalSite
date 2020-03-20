import React from 'react';
import joeBanner from '../../images/joeBanner.jpg';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import Breadcrumb from './breadcrumbs/breadcrumb';

import styles from './banner.module.css';

function Banner() {
	return (
		<div className={styles.sectionContainer}>
			<div className={styles.bannerContainer}>
				<img className={styles.bannerImg} src={joeBanner} />
			</div>
			<div className={nameContainer}>
				<div>Joe</div>
				<div>Tustin</div>
			</div>
			{/* <Breadcrumb /> */}
		</div>
	);
}

export default Banner;
