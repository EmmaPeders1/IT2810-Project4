import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
import About from './Pages/About/About';
import Sidebar from './Components/Sidebar/Sidebar';


export default function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/about" element={<About />}/>
        </Routes>
      </Router>
    </div>
  );
}