import React from 'react';
import styles from './map.module.css';
import SectionHeader from '../components/sectionHeader./sectionHeader';

const config = {
	gMapsApi: process.env.REACT_APP_GOOGLE_MAP_API
};

function map() {
	return (
		<div className={styles.mapContainer}>
			<SectionHeader
				titleOne={`Where in the world was Joe SanDiego`}
				titleTwo={'Ayyyyy Lit ass maps'}
			/>
			<div className={styles.gMapContainer}>MAP</div>
		</div>
	);
}

export default map;
