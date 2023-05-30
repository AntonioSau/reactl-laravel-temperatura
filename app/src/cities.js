import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Select from 'react-select';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'

function Cities({ onChange }) {
  const [locations, setLocations] = useState([]);
  const [selected, setSelected] = useState([]);
  const [selectedValue, setSelectedValue] = useState(1);
 
  useEffect(() => {
    axios.get('http://127.0.0.1:80/api/city/p2lbgWkFrykA4QyUmpHihzmc5BNzIABq')
      .then(response => {
        setLocations(response.data.cities); 
        setSelected( response.data.cities[0] );
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleSelectChange = event => {
    const selectedOption = event.value;
    setSelected(selectedOption);
    setSelectedValue(selectedOption);
    onChange(selectedOption);
  };
  
  return (
    <div className="hero" data-bg-image="images/banner.png">
      <div className="container">
        <form action="#" className="find-location">
          <Select onChange={handleSelectChange}
            options={locations.map(location => ({
              value: location.id,
              label: location.name
            }))}
            value={selectedValue}
          />
        </form>
      </div>
    </div>
  );
}

export default Cities;
