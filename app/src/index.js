import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; 
import reportWebVitals from './reportWebVitals';
import Cities from './cities';
import City from './city';

function renderCityStatus(selectedValue) {
  city_status.render(
    <React.StrictMode>
      <City  selectedValue={selectedValue}  />
    </React.StrictMode>,
    document.getElementById('city_status'),
  );
}

const handleSelectChange = (selectedValue) => {

  city_status.render(
    <React.StrictMode>
      <City  selectedValue={selectedValue}  />
    </React.StrictMode>,
    document.getElementById('city_status'),
  );

};

var selectedValue = 1;
const cities_select = ReactDOM.createRoot(document.getElementById('cities_select'));
cities_select.render(
  <React.StrictMode>
    <Cities onChange={handleSelectChange} selectedValue={selectedValue} />
  </React.StrictMode>,
  document.getElementById('cities_select')
);

const city_status = ReactDOM.createRoot(document.getElementById('city_status'));
renderCityStatus(selectedValue);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
