import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home-page/HomePage';
import ClassicPage from './pages/classic-page/ClassicPage';
import SurvivalPage from './pages/survival-page/SurvivalPage';
import Welcome from './components/Welcome';
import LevelOne from './pages/classic-page/levels/LevelOne';
import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="classic" element={<ClassicPage />}>
          <Route index element={<Welcome />} />
          <Route path="level-1" element={<LevelOne />} />
        </Route>
        <Route path="survival" element={<SurvivalPage />} />
      </Routes>
    </Router>
  );
};

export default App;
