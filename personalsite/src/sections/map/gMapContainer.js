import React, { Component } from 'react';
import {
	Map,
	InfoWindow,
	Marker,
	Polyline,
	GoogleApiWrapper
} from 'google-maps-react';
import styles from './map.module.css';

import gMapData from '../../Data/gMapData';
import polylineData from '../../Data/polylineData';

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
		console.log(polylineData[0].lat);
		return (
			<Map
				google={this.props.google}
				zoom={2}
				initialCenter={{ lat: 0, lng: 0 }}
			>
				<Polyline
					path={polylineData}
					strokeColor="#0000FF"
					strokeOpacity={0.8}
					strokeWeight={2}
				/>
				{/* {this.displayMarkers()} */}
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
