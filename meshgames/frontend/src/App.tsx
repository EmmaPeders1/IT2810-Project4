import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Header from './Components/Header/Header';
import ModeToggleButton from './Components/ModeToggleButton/ModeToggleButton';
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
import About from './Pages/About/About';
import AppThemeProvider from './Recoil/ThemeProvider/ThemeProvider';
import './App.css';
import NavBar from './Components/NavBar/NavBar';

export default function App() {
  return (
    <RecoilRoot>
      <AppThemeProvider>
        <div className="App">
          <Router>
            <Header />
            <ModeToggleButton />
            <NavBar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </Router>
        </div>
      </AppThemeProvider>
    </RecoilRoot>
  );
}