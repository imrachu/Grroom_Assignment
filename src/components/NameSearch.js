import React, { useState, useEffect } from 'react';
import CountryList from './CountryList';

const SearchPage = (props) => {
  const [input, setInput] = useState('');
  const [countryListDefault, setCountryListDefault] = useState();
  const [countryList, setCountryList] = useState();

  const fetchData = async () => {
    return await fetch('https://restcountries.eu/rest/v2/all')
      .then(response => response.json())
      .then(data => {
        setCountryList(data)
        setCountryListDefault(data)
      });
  }

  const updateInput = async (input) => {
    const filtered = countryListDefault.filter(country => {
      return country.name.toLowerCase().includes(input.toString().toLowerCase())
    })
    setInput(input);
    setCountryList(filtered);
  }  

  useEffect(() => { fetchData() }, []);
    return (
      <div>
        <div>
          <input
            key="random1"
            value={input}
            placeholder={"Enter Name"}
            onChange={(e) => updateInput(e.target.value)}
          />
        </div>
        <h1>Country List</h1>
      <CountryList countryList={countryList} updateInput={updateInput} />
      </div>
    );  
}

export default SearchPage

