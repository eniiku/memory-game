import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ClassicPage from './pages/classic-page/ClassicPage';
import SurvivalPage from './pages/survival-page/SurvivalPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/classic/welcome" element={<ClassicPage />} />
        <Route path="/survival" element={<SurvivalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
