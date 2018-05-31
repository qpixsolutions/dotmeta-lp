import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import prodducts from './components/prodducts';
import headder from './components/headder';
import Footter from './components/dmFooter';
import landingpage from './components/landingpage';
import sigup from './components/sigup';
import Landing from './components/landingpage';
import Navvbar from './components/dmNavbar';
class App extends Component {
  
  render() {
    return (
      /*<div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Dot Meta</h1>
          
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button bsStyle='success'>Hi</Button>
      </div>*/
    <Router>
      <div>
        
        <Route exact path="/" component={landingpage}/>
        <Route  path="/about" component={headder}/>
        <Route  path="/products" component={prodducts}/>
        
        </div>
      </Router> );
  }
}

export default App;