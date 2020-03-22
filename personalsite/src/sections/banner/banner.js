import React from 'react';

import bannerCompressed from '../../images/bannerCompressed.jpg';
import bannerCompressed2 from '../../images/bannerCompressed2.jpg';
import bannerResized from '../../images/bannerResized.JPG';

import Breadcrumb from './breadcrumbs/breadcrumb';
import styles from './banner.module.css';

function Banner() {
	return (
		<div id="banner" className={styles.sectionContainer}>
			<div className={styles.bannerContainer}>
				<div className={styles.imgContainer}>
					<img className={styles.bannerImg} src={bannerResized} />
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
