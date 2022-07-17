import React from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineGithub } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="home-page">
      <div className="text">
        <h1>memorygame</h1>
        <h3>Anime Edition</h3>
      </div>
      <div className="buttons">
        <Link to="/classic">
          <button className="btn">classic Mode</button>
        </Link>
        <Link to="/survival">
          <button className="btn-secondary">Survival Mode</button>
        </Link>
      </div>
      <footer>
        built by
        <a href="http://github.com/tekyuma">
          <AiOutlineGithub />
        </a>
        for the odin project
      </footer>
    </div>
  );
};

export default Home;
