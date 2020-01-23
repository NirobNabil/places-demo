import React from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Map from "./components/Map";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedPlaces: [],
    }
  }

  addMarker (fields) {
    let gged = this.state.selectedPlaces;
    gged.push({'latitude':fields.latitude,'longitude':fields.longitude })
    this.setState({
      selectedPlaces: gged
    });
    console.log(this.state.selectedPlaces);
  }
  
  render(){
    return (     
      <div className="motherContainer">
        <div className="search"><SearchBar addMarker={this.addMarker.bind(this)} /></div>
        <div className="result">
          <div className="map"><Map places={
            this.state.selectedPlaces.map(place => {return {name: "gg", coordinate:{'latitude':place.latitude,'longitude':place.longitude }}})
          }/>
          </div>
          <div className="table"><Table /></div>
        </div>
      </div>
    ); 
  }
}

export default App;
