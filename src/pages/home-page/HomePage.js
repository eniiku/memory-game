import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { AiOutlineGithub } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="home-page">
      <div className="text">
        <h1>memorygame</h1>
        <h3>Anime Edition</h3>
      </div>
      <div className="buttons">
        <Link to="classic">
          <button className="btn">classic Mode</button>
        </Link>
        <Link to="survival">
          <button className="btn-secondary">Survival Mode</button>
        </Link>
      </div>
      <footer>
        built by
        <a href="http://github.com/tekyuma">
          <IconContext.Provider value={{ className: 'footer-icon' }}>
            <AiOutlineGithub />
          </IconContext.Provider>
        </a>
        for the odin project
      </footer>
    </div>
  );
};

export default Home;
