import './App.css';
import SearchIcon from './search.svg';
import { useState, useEffect } from 'react';
import Card from './Card.jsx';


const App = () => {
  const [weather, setWeather] = useState({})
  const [city, setCity] = useState('');
  const searchCity = async (city) => {
    console.log(city)
    const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=8518bf0a99e1ff04f2838a9405f00cbd&days=1`);  
    // const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${city}&appid=8518bf0a99e1ff04f2838a9405f00cbd`); 
    const data = await response.json();
    setWeather(data[0]);
    console.log(data[0]);
  }

  useEffect(() => {
    searchCity('mumbai');
  }, []);
  const refreshPage = () => {
    window.location.reload(false);
  }
  return (
    <div className="App">
      <nav className="navbar navbar-light bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{ color: "white" }}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgzpMHVi979s_IM26TborPigWQrUrd0tbqn8TwCII&s" alt="" width="30" height="24" className="d-inline-block align-text-top" />
            Weather
          </a>
          <button className="button1" onClick={refreshPage}>Refresh</button>
        </div>
      </nav>
      <div className="row header">
        <div className="col float-start">         
          <h5 className="name"><img className="image" src="https://static.thenounproject.com/png/2053972-200.png" alt="location" />{weather.name}</h5>
          <h6 className="name">Lat: {weather.lat} | Lon: {weather.lon}</h6>
        </div>
        <div className="search col float-end">
          <input className="searchinput" placeholder="Search your city here.."
            value={city}
            onChange={(e) => setCity(e.target.value)} />
          <img src={SearchIcon} className="image"  alt="search" onClick={() => searchCity(city )} />
        </div>
      </div>
      <div className="body container-fluid row ans">
        <div className="static float-start col"> 
          <div><input type="date" placeholder="Select Date.." /></div>
          <div className="my-2">
            <h6>State</h6>
            <h6>Latitude</h6>
            <h6>Longitude</h6>
          </div>
        </div>
        <div className="col float-middle">
        <Card className="row" weather={weather} />
      </div>
      </div>
     
      
    </div>
  );
}

export default App;
