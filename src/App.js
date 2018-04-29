import React, { Component } from 'react';
import Navigation from "./components/Navigation/index";
import { BrowserRouter } from "react-router-dom"; 
import Routes from "./components/routes";
import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <Navigation />
          </header>
          <div className="App-content"> 
            <Routes />
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
