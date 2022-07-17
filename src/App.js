import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ClassicPage from './components/ClassicPage';
import SurvivalPage from './components/SurvivalPage';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/classic" element={<ClassicPage />} />
        <Route path="/survival" element={<SurvivalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
