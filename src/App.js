import React from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Map from "./components/Map";
import { Card } from 'antd';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeMarkers: [],
      mapCenter: {},
      getPlaces: {},
      places: [],
      setSearchbarCoordinate: {}
    }
  }

  set_setSearchbarDefaultCoordinate = (func) => {
    this.setState({
      setSearchbarCoordinate: func
    })
  }

  set_getPlaces = (func) => {
    console.log("in appjs setgetplaces", func);
    this.setState({
      getPlaces: func
    })
  }

  set_places = (places) => {
    this.setState({
      'places': places
    })
    this.state.places.forEach( (place) => {
      this.addMarker({
        'latitude': place.geometry.location.lat(),
        'longitude':  place.geometry.location.lng(),
      })
    })
    console.log("set places");
    console.log(this.state.places);
  }

  find_places = (fields) => {
    this.addMarker({'latitude': fields.latitude, 'longitude': fields.longitude});
    this.state.getPlaces({'latitude':fields.latitude,'longitude':fields.longitude }, fields.radius, fields.filters, this.set_places);
  }

  addMarker = (fields) => {
    let gged = this.state.activeMarkers;
    gged.push({'latitude':fields.latitude,'longitude':fields.longitude })
    this.setState({
      activeMarkers: gged
    });
    // console.log(this.state.activeMarkers);
    // console.log(this.state.getPlaces);
  }

  updateCurrentLocation = (coords) => {
    this.setState({
      mapCenter: {
        'latitude': coords.latitude,
        'longitude': coords.longitude
      },
    })
    this.state.setSearchbarCoordinate({
      'latitude': coords.latitude,
      'longitude': coords.longitude
    })
  }

  componentDidMount = () => {
    if (navigator && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(pos => {
        const coords = pos.coords;
        this.setState({
          mapCenter: {
            'latitude': coords.latitude,
            'longitude': coords.longitude
          },
          loaded: true
        });
        this.state.setSearchbarCoordinate({
          'latitude': coords.latitude,
          'longitude': coords.longitude
        })
      });
    }
  }
  
  render(){
    return (     
      <div className="motherContainer">
        <div className="search">
          <div class="protip">
            <h3>Pro tip! </h3>
            <span>click on anywhere on the map to select a coordinate</span>
          </div>
          <SearchBar 
            set_setSearchbarDefaultCoordinate={this.set_setSearchbarDefaultCoordinate}
            find_places={this.find_places.bind(this)}
            currentLocation={this.state.mapCenter}
          />
        </div>
        <div className="result">
          <div className="map">
            {this.state.loaded ? <Map 
              places={ this.state.activeMarkers.map(place => {return {name: `${place.latitude}, ${place.longitude}`, coordinate:{'latitude':place.latitude,'longitude':place.longitude }}}) }
              mapCenter={ this.state.mapCenter }
              set_getPlaces={this.set_getPlaces}
              set_places={this.set_places}
              addMarker={this.addMarker.bind(this)}
              updateCurrentLocation={this.updateCurrentLocation}
            /> : <></>}
          </div>
          <div className="table"><Table data={this.state.places}/></div>
        </div>
      </div>
    ); 
  }
}

export default App;
