import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import CountryDetails from './components/CountryDetail';
import { useTheme } from './ThemeContext';
import './App.css';  // Import general styles

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Router>
      <div className={theme}>
        <nav className="navbar">
          <h1>Where in the world?</h1>
          <button onClick={toggleTheme}>
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </button>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:name" element={<CountryDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
