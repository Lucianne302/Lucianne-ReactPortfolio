// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import About from './pages/about'
import Contact from './pages/contact'
import Portfolio from './pages/portfolio'
import Resume from './pages/resume'
import Nav from './pages/nav'
import Footer from './pages/footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route exact path = "/About" component = { About } />
          <Route exact path = "/Contact" component = { Contact } />
          <Route exact path = "/Portfolio"  component = { Portfolio } />
          <Route exact path = "/Resume"  component = { Resume } />
          <Route exact path = "/Footer"  component = { Footer } />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
