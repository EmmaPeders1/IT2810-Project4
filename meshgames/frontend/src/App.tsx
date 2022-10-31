import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
import Charts from './Pages/Charts/Charts';
import About from './Pages/About/About';
import Sidebar from './Components/Sidebar/Sidebar';
import { RecoilRoot } from 'recoil';
import AppThemeProvider from './Recoil/ThemeProvider/ThemeProvider';
import ModeToggleButton from './Components/ModeToggleButton/ModeToggleButton';

export default function App() {

  return (
    <RecoilRoot>
      <AppThemeProvider>
        <div className="App">
          <Router>
            <Header/>
            <Sidebar/>
            <ModeToggleButton/>
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/favorites" element={<Favorites />}/>
              <Route path="/about" element={<About />}/>
              <Route path="/charts" element={<Charts />}/>
            </Routes>
          </Router>
        </div>
    </AppThemeProvider>
  </RecoilRoot>
  );
}