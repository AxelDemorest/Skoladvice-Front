import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* import logo from './logo.svg'; */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import { Header } from './components/header/Header.js'
import { Admin } from './components/dashboard/Admin.js'
import { Home } from './components/home/Home'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
