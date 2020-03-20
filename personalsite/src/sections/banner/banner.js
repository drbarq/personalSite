import React from 'react';
import joeBanner from '../../images/joeBanner.jpg';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import Breadcrumb from './breadcrumbs/breadcrumb';

import styles from './banner.module.css';

function Banner() {
	return (
		<div className={styles.sectionContainer}>
			<div className={styles.bannerContainer}>
				{/* <h2>Joe</h2> */}
				<img className={styles.bannerImg} src={joeBanner} />
				<div className={styles.nameContainer}>
					<h2>JoeEE</h2>
				</div>
			</div>

			{/* <Breadcrumb /> */}
		</div>
	);
}

export default Banner;
