import React from 'react';

const Welcome = () => {
  return (
    <div className="welcome-page">
      <p>
        Beat the game by playing through 10 levels each increasing in
        difficulty. Do you think you have what it takes to beat all 10 levels?
      </p>
      <div className="instructions">
        <h3>Instructions</h3>
        <p>The game is simple!</p>
        <ul>
          <li>You are given three(3) hearts.</li>
          <li>You get points by clicking on a card just once!</li>
          <li>One(1) point is awarded for each valid click.</li>
          <li>
            Click on a card more than once and you lose a point and a heart!
          </li>
          <li>Lose all three(3) hearts and you lose the game.</li>
          <li>Hearts are replenished after every round won.</li>
        </ul>
        <p>Got that?</p>
      </div>
      <button>continue</button>
    </div>
  );
};

export default Welcome;
