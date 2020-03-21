import React, { Component } from 'react';
import {
	Map,
	InfoWindow,
	Marker,
	Polyline,
	GoogleApiWrapper
} from 'google-maps-react';
import styles from './map.module.css';

import { faDotCircle } from '@fortawesome/free-solid-svg-icons';

import markerFA from '../../icons/marker.svg';

import mapMarkers from '../../gpsData/mapMarkers';
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
		const markPoint = markerFA;
		return mapMarkers.map((point, index) => {
			return (
				<Marker
					key={index}
					id={index}
					position={{ lat: point.LATITUDE, lng: point.LONGITUDE }}
					onClick={this.onMarkerClick}
					icon={{ path: this.props.google.maps.SymbolPath.CIRCLE, scale: 5 }}
					// icon={{ path: this.markerFA, scale: 5 }}
					name={point.Location}
					title={point.title}
					blogPost={point.blogPost}
					picture={point.picture}
				/>
			);
		});
	};

	render() {
		return (
			<Map
				google={this.props.google}
				zoom={2}
				initialCenter={{ lat: 6, lng: -38 }}
				onClick={this.onMapClicked}
				disableDefaultUI={true}
			>
				{this.displayMarkers()}

				<InfoWindow
					marker={this.state.activeMarker}
					visible={this.state.showingInfoWindow}
				>
					<div className={styles.infoWindow}>
						<div className={styles.title}>{this.state.selectedPlace.name}</div>
						<a href={this.state.selectedPlace.blogPost} target="_blank">
							{this.state.selectedPlace.title}
						</a>
						<div className={styles.infoPicture}>
							<img
								// className={styles.infoPicture}
								src={this.state.selectedPlace.picture}
							/>
						</div>
					</div>
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

{
	/* <Marker
					position={{ lat: 29.75843, lng: -104.97705 }}
					name={'Blog Post2'}
					onClick={this.onMarkerClick}
					// blogInfo={[{ post: 'one' }]}
				/>
				<Marker
					position={{ lat: 27.9981, lng: 86.84742 }}
					onClick={this.onMarkerClick}
					name={'Everest Base Camp, Nepal'}
					title={
						'If you can avoid fighting with monkey and dog, you might be okay'
					}
					blogPost={
						'https://www.qr646.com/single-post/2017/11/18/If-you-can-avoid-fighting-with-monkey-and-dog-you-might-be-okay'
					}
					picture={
						'https://static.wixstatic.com/media/7fcb35_8943ad51b00e44338421b9f7687ed7f2~mv2_d_1502_1502_s_2.jpg/v1/fill/w_1502,h_1502,al_c,q_90/7fcb35_8943ad51b00e44338421b9f7687ed7f2~mv2_d_1502_1502_s_2.webp'
					}
				/> */
}
