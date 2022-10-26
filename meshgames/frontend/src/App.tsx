import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
import Charts from './Pages/Charts/Charts';
import About from './Pages/About/About';
import Sidebar from './Components/Sidebar/Sidebar';


function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Sidebar/>
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
