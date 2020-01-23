import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  margin: '3em',
};

class MapContainer extends React.Component {
  constructor(props){
    super(props);
  }
  map = {};
  state = {
    showingInfoWindow: false,
    activeMarkers: {},
    selectedPlaces: {},
    selectedPlace: {},
    manual: false,
    currentLocation: {},
    loaded: false

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
  componentDidMount = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        this.setState({
          currentLocation: {
            lat: coords.latitude,
            lng: coords.longitude
          },
          loaded: true
        });

        //let center = new maps.LatLng(current.lat, current.lng);
        //map.panTo(center);
      });
    }
  }
  panMapTo = () => {

  }

  render() {
    return (
      this.state.loaded ? 
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          initialCenter={{
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng
          }}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={"current location"}
          position={{
            lat: this.state.currentLocation.lat,
            lng: this.state.currentLocation.lng
          }}
        />
        {this.props.places.map( place => {
          return (
            <Marker
              onClick={this.onMarkerClick}
              name={place.name}
              position={{lat: place.coordinate.latitude, lng: place.coordinate.longitude}}
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
      : <div> "loading" </div>

    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyC4q0S0GbA-cxRC_4ZVcd6AOeW3Yjt10tE',
})(MapContainer);