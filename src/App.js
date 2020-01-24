import React from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Map from "./components/Map";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      activeMarkers: [],
      mapCenter: {},
      getPlaces: {},
      places: []
    }
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
    console.log("set places");
    console.log(this.state.places);
  }

  addMarker (fields) {
    let gged = this.state.activeMarkers;
    gged.push({'latitude':fields.latitude,'longitude':fields.longitude })
    this.setState({
      activeMarkers: gged
    });
    console.log(this.state.activeMarkers);
    console.log(this.state.getPlaces);
    this.state.getPlaces({'latitude':fields.latitude,'longitude':fields.longitude }, fields.radius, fields.filters, this.set_places);
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
      });
    }
  }
  
  render(){
    return (     
      <div className="motherContainer">
        <div className="search"><SearchBar addMarker={this.addMarker.bind(this)} /></div>
        <div className="result">
          <div className="map">
            {this.state.loaded ? <Map 
              places={ this.state.activeMarkers.map(place => {return {name: "gg", coordinate:{'latitude':place.latitude,'longitude':place.longitude }}}) }
              mapCenter={ this.state.mapCenter }
              set_getPlaces={this.set_getPlaces}
              set_places={this.set_places}
            /> : <></>}
          </div>
          <div className="table"><Table data={this.state.places}/></div>
        </div>
      </div>
    ); 
  }
}

export default App;
