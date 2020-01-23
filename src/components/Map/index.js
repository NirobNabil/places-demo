import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  margin: '3em',
};

class MapContainer extends React.Component {
  constructor(props){
    super(props);
  }
  state = {
    showingInfoWindow: false,
    activeMarkers: {},
    selectedPlaces: {},
    selectedPlace: {},
    manual: false,

  };
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });

  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
          lat: -1.2884,
          lng: 36.8233
        }}
      >
      {this.props.places.map( place => {
        return (
          <Marker
            onClick={this.onMarkerClick}
            name={place.name}
            position={{lat: place.coordinate.lattitude, lng: place.coordinate.longitude}}
          />
        )
      })}
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC4q0S0GbA-cxRC_4ZVcd6AOeW3Yjt10tE',
})(MapContainer);