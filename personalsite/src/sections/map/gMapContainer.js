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
	state = {
		showingInfoWindow: false,
		activeMarker: {},
		selectedPlace: {}
	};

	onMarkerClick = (props, marker, e) =>
		this.setState({
			selectedPlace: props,
			activeMarker: marker,
			showingInfoWindow: true
		});

	onMapClicked = props => {
		if (this.state.showingInfoWindow) {
			this.setState({
				showingInfoWindow: false,
				activeMarker: null
			});
		}
	};

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
				onClick={this.onMapClicked}
			>
				{/* {this.displayMarkers()} */}
				<Marker
					position={{ lat: 29.75843, lng: -104.97705 }}
					name={'Blog Post2'}
					onClick={this.onMarkerClick}
					// blogInfo={[{ post: 'one' }]}
				/>
				<Marker
					position={{ lat: 39.75843, lng: -104.97705 }}
					name={'Blog Post'}
					onClick={this.onMarkerClick}
					// blogInfo={[{ post: 'two' }]}
				/>
				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
				>
					<h1>{this.state.selectedPlace.name}</h1>
				</InfoWindow>
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
