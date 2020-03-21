import React from 'react';
import joeBanner from '../../images/joeBanner.jpg';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

import JoeImageBig from '../../images/DSC08263.JPG';

import Breadcrumb from './breadcrumbs/breadcrumb';

import styles from './banner.module.css';

function Banner() {
	return (
		<div id="banner" className={styles.sectionContainer}>
			<div className={styles.bannerContainer}>
				<div className={styles.imgContainer}>
					{/* <img className={styles.bannerImg} src={joeBanner} /> */}
					<img className={styles.bannerImg} src={JoeImageBig} />
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
