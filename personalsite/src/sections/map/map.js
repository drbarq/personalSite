import React from 'react';
import styles from './map.module.css';
import SectionHeader from '../components/sectionHeader./sectionHeader';

import MapContainer from './gMapContainer';

function map() {
	return (
		<div className={styles.mapContainer}>
			<SectionHeader
				titleOne={`Where in the world was Joe SanDiego`}
				titleTwo={'Ayyyyy Lit ass maps'}
			/>
			<div className={styles.gMapContainer}>
				<MapContainer />
			</div>
		</div>
	);
}

export default map;
