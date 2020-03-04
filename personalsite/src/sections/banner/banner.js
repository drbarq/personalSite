import React, { Fragment } from 'react';
import joeBanner from '../../images/joeBanner.jpg';

import styles from './banner.module.css';

// function banner() {
// 	return (
// 		// <section>
// 		<h1>Section One</h1>
// 		// </section>
// 	);
// }

const banner = (
	// <React.Fragment>
	<div className={styles.bannerContainer}>
		<h1 className={styles.h1}>Joe Tustin</h1>
		<img className={styles.bannerImg} src={joeBanner} />
	</div>
	// {/* </React.Fragment> */}
);

// class Banner extends React.Component {
// 	render() {
// 		return (
// 			<section>
// 				<h1>Section One</h1>
// 				<img src={joeBanner} />
// 			</section>
// 		);
// 	}
// }

export default banner;
