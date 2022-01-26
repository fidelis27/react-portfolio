import React from "react";
import "./Header.css";

const Header = ({ resumeData }) => {
  return (
    <>
      <header id="home">
        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>        
           
          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#resume">
                Resume
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#portfolio">
                Personal Project
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <div>
              <img
                class="emoji"
                alt="wave"
                height="60"
                width="60"
                src="https://github.githubassets.com/images/icons/emoji/unicode/1f44b.png"
              />
              <h1>{resumeData.hello} </h1>              
            </div>
            <h3>{resumeData.roleDescription}</h3>
            <hr />
            <ul className="social">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        rel="noopener noreferrer"
                        href={item.url}
                        target="_blank"
                      >
                        <i className={item.className}></i>
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="fa fa-arrow-circle-down"></i>
          </a>
        </p>
      </header>
    </>
  );
};

export default Header;
