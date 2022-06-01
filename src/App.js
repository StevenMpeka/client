import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  useHistory,
} from "react-router-dom";
import Color from './components/Colors'
import Home from './components/Home';
import AllColors from './components/AllColors';
import LivingRoom from './components/LivingRoom';
import BedRoom from './components/BedRoom';
import PaintPhoto from './components/PaintPhoto';
import PaintUpload from './components/PaintUpload';
import LandingPage from './LandingPage';
import Bathroom from './components/Bathroom';
import Kitchen from './components/Kitchen';
import Exterior from './components/Exterior';
import Commercial from './components/Commercial';
import FrontDoor from './components/FrontDoor';
import Dining from './components/Dining';

function App() {
  
  return (
    <Router>
      <Route path="/color">
        <Color/>
      </Route>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/landing">
        <LandingPage/>
      </Route>
      <Route path="/allcolors">
        <AllColors/>
      </Route>
      <Route path="/livingroom">
        <LivingRoom/>
      </Route>
      <Route path="/bedroom">
        <BedRoom/>
      </Route>
      <Route path="/bathroom">
        <Bathroom/>
      </Route>
      <Route path="/kitchen">
        <Kitchen/>
      </Route>
      <Route path="/exterior">
        <Exterior/>
      </Route>
      <Route path="/commercial">
        <Commercial/>
      </Route>
      <Route path="/door">
        <FrontDoor/>
      </Route>
      <Route path="/dining">
        <Dining/>
      </Route>
      <Route path="/paint/:id">
        <PaintPhoto/>
      </Route>
      <Route path="/paintupload">
        <PaintUpload/>
      </Route>
    </Router>
  );
}

export default App