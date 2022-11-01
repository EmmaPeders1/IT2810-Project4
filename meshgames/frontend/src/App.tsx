import './App.css';
import Header from './Components/Header/Header';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Favorites from './Pages/Favorites/Favorites';
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
            <Header />
            <ModeToggleButton />
            <Sidebar />
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