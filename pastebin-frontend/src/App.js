import './App.scss';

import React, { Component }  from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Layout from './components/resusable/Layout';

import Home from './components/pages/Home';
import Search from './components/pages/Search';
import Create from './components/pages/Create';
import List from './components/pages/List';

function App() {
  return (
    <div className="App">
      <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/search" element={<Search />} />
              <Route exact path="/create" element={<Create />} />
              <Route exact path="/list" element={<List />} />
            </Routes>
          </Layout>
      </Router>
    </div>
  );
}

export default App;
