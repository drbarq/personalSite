import React from 'react';

import bannerCompressed from '../../images/bannerCompressed.jpg';
import Breadcrumb from './breadcrumbs/breadcrumb';
import styles from './banner.module.css';

function Banner() {
	return (
		<div id="banner" className={styles.sectionContainer}>
			<div className={styles.bannerContainer}>
				<div className={styles.imgContainer}>
					<img className={styles.bannerImg} src={bannerCompressed} />
				</div>
				<div className={styles.nameContainer}>
					<div className={styles.name}>Joe</div>
					<div className={styles.name}>Tustin</div>
				</div>
				<div className={styles.breadcrumbLinks}>
					<Breadcrumb />
				</div>
			</div>
		</div>
	);
}

export default Banner;
