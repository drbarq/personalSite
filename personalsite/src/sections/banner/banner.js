import React from 'react';

import bannerCropped from '../../images/bannerResizedCrop.png';
import bannerResized from '../../images/bannerResized.JPG';

import Breadcrumb from './breadcrumbs/breadcrumb';
import styles from './banner.module.css';

function Banner() {
	return (
		<div id="banner" className={styles.sectionContainer}>
			<div className={styles.bannerContainer}>
				<div className={styles.imgContainer}>
					<img className={styles.bannerImg} src={bannerCropped} />
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
