import './App.scss';

import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from './components/pages/Home';

function App() {
  return (
    <div className="App">
      <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
