import React from "react";
import "./App.scss";
import SearchBar from "./components/SearchBar";
import Table from "./components/Table";
import Map from "./components/Map"

function App() {
  return (    
    <>    
    <div className="motherContainer">
      <div className="search"><SearchBar /></div>
      <div className="result">
        <div className="map"><Map places={ 
          [{ name: "Gg", coordinate:{lattitude:-1.2884,longitude:36.8233} }] }
        />
        </div>
        <div className="table"><Table /></div>
      </div>
    </div>
    </>
  );
}

export default App;
