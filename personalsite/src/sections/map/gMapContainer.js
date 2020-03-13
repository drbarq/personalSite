import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './map.module.css';

import gMapData from '../../Data/gMapData';

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
		// console.log(gMapData[0].LATITUDE);
		return (
			<Map
				google={this.props.google}
				zoom={2}
				initialCenter={{ lat: 0, lng: 0 }}
			>
				{this.displayMarkers()}
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: config.gMapsApi
})(MapContainer);

// export class MapContainer extends Component {
// 	render() {
// 		return (
// 			<Map google={this.props.google} zoom={14}>
// 				<Marker onClick={this.onMarkerClick} name={'Current location'} />

// 				<InfoWindow onClose={this.onInfoWindowClose}>
// 					<div>
// 						<h1>HELLO</h1>
// 					</div>
// 				</InfoWindow>
// 			</Map>
// 		);
// 	}
// }
