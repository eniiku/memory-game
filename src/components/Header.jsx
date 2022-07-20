import React from 'react';
import { Link } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Header = () => {
  return (
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
  );
};

export default Header;
