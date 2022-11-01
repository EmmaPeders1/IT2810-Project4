import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Favorites from './Pages/Favorites';
import Charts from './Pages/Charts';
import About from './Pages/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/charts" element={<Charts />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
