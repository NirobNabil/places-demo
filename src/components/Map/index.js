import React from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import env from '../../utils/constants';

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
    loaded: true,
    map: {}

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
  // componentDidMount = () => {
  //   if (navigator && navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(pos => {
  //       const coords = pos.coords;
  //       this.setState({
  //         currentLocation: {
  //           lat: coords.latitude,
  //           lng: coords.longitude
  //         },
  //         loaded: true
  //       });

  //       //let center = new maps.LatLng(current.lat, current.lng);
  //       //map.panTo(center);
  //     });
  //   }
  // }
  componentDidUpdate = () => {
    console.log(this.props.places)
  }
  panMapTo = () => {

  }

  setMap = (mapProps, map) => {
    console.log("ayhy");
    console.log(mapProps);
    console.log(map);
    this.setState({
      'map': map
    })
    console.log(this.fetchPlaces);
    window.fetchPlaces = this.fetchPlaces;
    this.props.set_getPlaces(this.fetchPlaces)
  }

  fetchPlaces = (coordinate, radius, types, callback) => {
    console.log("came fetchplaces");
    let service = new this.props.google.maps.places.PlacesService(this.state.map);
    var coordinateOBJ = new this.props.google.maps.LatLng(coordinate.latitude,coordinate.longitude);
    var request = {
      location: coordinateOBJ,
      radius: '500',
      type: ['restaurant']
    };
    console.log("gge pringting");
    service.nearbySearch(request, (e) => {console.log(e); callback(e)});
  }

  render() {
    return (
      this.state.loaded ? 
        <Map
          google={this.props.google}
          zoom={14}
          style={mapStyles}
          onReady={this.setMap}
          initialCenter={{
            lat: this.props.mapCenter.latitude,
            lng: this.props.mapCenter.longitude
          }}
        >
        <Marker
          onClick={this.onMarkerClick}
          name={"current location"}
          position={{
            lat: this.props.mapCenter.latitude,
            lng: this.props.mapCenter.longitude
          }}
        />
        {this.props.places.map( place => {
          return (
            <Marker
              key={place.coordinate.latitude}
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
  apiKey: env.API_KEY ,
})(MapContainer);