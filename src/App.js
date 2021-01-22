import React, { Component } from 'react';
import './App.css';
import CodeSearch from './components/CodeSearch';
import NameSearch from './components/NameSearch.js';
import CurrencySearch from './components/CurrencySearch.js';
import LanguageSearch from './components/LanguageSearch.js';
import CapitalSearch from './components/CapitalSearch.js';
import CallingSearch from './components/CallingSearch.js';
import RegionSearch from './components/RegionSearch.js';

function Search(props) {
  if (props.para === null) {
    return <h1>Select Parameter</h1>
  }
  else if (props.para === "name") {
    return (
      <div>
        <NameSearch />
      </div>
    );
  }
  else if (props.para === "code") {
    return (
      <div>
        <CodeSearch />
      </div>
    );
  }
  else if (props.para === "currency") {
    return (
      <div>
        <CurrencySearch />
      </div>
    );
  }
  else if (props.para === "language") {
    return (
      <div>
        <LanguageSearch />
      </div>
    );
  }
  else if (props.para === "capital") {
    return (
      <div>
        <CapitalSearch />
      </div>
    );
  }
  else if (props.para === "calling") {
    return (
      <div>
        <CallingSearch />
      </div>
    );
  }
  else if (props.para === "region") {
    return (
      <div>
        <RegionSearch />
      </div>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { parameter: null };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick(event) {
    this.setState(state => ({
      parameter: event.target.value
    }));
  }

  render() {
    return (
      <div className="App">  
        <button value = "name" onClick={this.handleToggleClick}>
          Name
        </button>
        <button value = "code" onClick={this.handleToggleClick}>
          Code
        </button>
        <button value = "currency" onClick={this.handleToggleClick}>
          Currency
        </button>
        <button value = "language" onClick={this.handleToggleClick}>
          Language
        </button>
        <button value = "capital" onClick={this.handleToggleClick}>
          Capital
        </button>
        <button value = "calling" onClick={this.handleToggleClick}>
          Calling
        </button>
        <button value = "region" onClick={this.handleToggleClick}>
          Region
        </button>
        <Search para={this.state.parameter} />
      </div>
    );
  }
}

export default App;