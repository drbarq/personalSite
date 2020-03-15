import React from 'react';
import styles from './map.module.css';
import SectionHeader from '../components/sectionHeader/sectionHeader';

import MapContainer from './gMapContainer';

function map() {
	return (
		<div className={styles.mapContainer}>
			<SectionHeader
				titleOne={`in Oct '17 I went out to see the world`}
				titleTwo={'neat places'}
			/>
			<div className={styles.gMapContainer}>
				<MapContainer />
			</div>
		</div>
	);
}

export default map;
