import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const SurvivalPage = () => {
  return (
    <div className="survival-page">
      <nav>
        <Link to="/">
          <button>back</button>
        </Link>
        <Link to="/">
          <p>memorygame</p>
        </Link>
        <div className="nav-icons">
          <a href="https://ng.linkedin.com/in/david-enikuomehin">
            <IconContext.Provider value={{ className: 'linkedin-nav-icons' }}>
              <BsLinkedin />
            </IconContext.Provider>
          </a>
          <a href="http://github.com/tekyuma">
            <IconContext.Provider value={{ className: 'github-nav-icons' }}>
              <BsGithub />
            </IconContext.Provider>
          </a>
        </div>
      </nav>
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
