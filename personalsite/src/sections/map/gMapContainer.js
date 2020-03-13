import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import styles from './map.module.css';
const config = {
	gMapsApi: process.env.REACT_APP_GOOGLE_MAP_API
};

const mapStyles = {
	// display: 'flex',
	// flexDirection: 'column',
	width: '50%',
	height: '50%'
};

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
export class MapContainer extends Component {
	render() {
		// console.log(this.props);
		return (
			<Map
				// className={styles.gMapContainer}
				google={this.props.google}
				zoom={8}
				style={mapStyles}
				initialCenter={{ lat: 47.444, lng: -122.176 }}
			/>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: config.gMapsApi
})(MapContainer);
