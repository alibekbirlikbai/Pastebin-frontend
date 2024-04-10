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
              <Route exact path="/pastebin" element={<Home />} />
              <Route exact path="/pastebin/search" element={<Search />} />
              <Route exact path="/pastebin/create" element={<Create />} />
              <Route exact path="/pastebin/list" element={<List />} />
            </Routes>
          </Layout>
      </Router>
    </div>
  );
}

export default App;
