import React from 'react';
import { AiOutlineGithub } from 'react-icons/ai';

const Home = () => {
  return (
    <div className="home-page">
      <div className="text">
        <h1>memorygame</h1>
        <h3>Anime Edition</h3>
      </div>
      <div className="buttons">
        <button className="btn">classic Mode</button>
        <button className="btn-secondary">Survival Mode</button>
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
