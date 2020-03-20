import React from 'react';
import styles from './map.module.css';
import SectionHeader from '../../components/sectionHeader/sectionHeader';

import MapContainer from './gMapContainer';

function map() {
	return (
		<div id="map" className={styles.sectionContainer}>
			<SectionHeader
				titleOne={`in Oct 2017 I went out to see the world`}
				titleTwo={'neat places'}
			/>
			<div className={styles.contentContainer}>
				<div className={styles.gMapContainer}>
					<MapContainer />
				</div>
			</div>
		</div>
	);
}

export default map;
