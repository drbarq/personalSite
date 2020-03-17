import React, { Component } from 'react';
import {
	Map,
	InfoWindow,
	Marker,
	Polyline,
	GoogleApiWrapper
} from 'google-maps-react';
import styles from './map.module.css';

import gMapData from '../../gpsData/gMapData';
import polylineData from '../../gpsData/polylineData';

const config = {
	gMapsApi: process.env.REACT_APP_GOOGLE_MAP_API
};

export class MapContainer extends Component {
	displayMarkers = () => {
		return gMapData.map((point, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{
						lat: point.LATITUDE,
						lng: point.LONGITUDE
					}}
					onClick={() => console.log(`what else is here: ${point}`)}
				/>
			);
		});
	};

	render() {
		return (
			<Map
				google={this.props.google}
				zoom={1}
				initialCenter={{ lat: 0, lng: 0 }}
			>
				<Polyline
					path={polylineData}
					strokeColor="#0000FF"
					strokeOpacity={0.8}
					strokeWeight={2}
				/>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: config.gMapsApi
})(MapContainer);
