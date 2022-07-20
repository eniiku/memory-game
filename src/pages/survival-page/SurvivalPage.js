import React from 'react';
import Header from '../../components/Header';

const SurvivalPage = () => {
  return (
    <div className="survival-page">
      <Header />
      <main>
        <div className="scoreboard">
          <div className="current-score">Current Score: 0</div>
          <div className="high-score">High Score: 11</div>
        </div>
        <div className="cards">
          <div className="card">card1</div>
          <div className="card">card2</div>
          <div className="card">card3</div>
          <div className="card">card4</div>
          <div className="card">card5</div>
          <div className="card">card6</div>
          <div className="card">card7</div>
          <div className="card">card8</div>
          <div className="card">card9</div>
          <div className="card">card10</div>
          <div className="card">card11</div>
          <div className="card">card12</div>
        </div>
      </main>
    </div>
  );
};

export default SurvivalPage;
