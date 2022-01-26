import React from "react";
import "./About.css";

const About = ({ resumeData }) => {
  return (
    <section id="about">
      <div className="row">
        <div className="col-lg-3 columns">
          <img
            className="profile-pic"
            src="https://avatars.githubusercontent.com/u/45233696?v=4"
            alt="foto de perfil"
          />
        </div>

        <div className="col-lg-9  columns main-col">
          <h2>About</h2>
          <p>{resumeData.aboutme}</p>

          <div className="row m-0">
            <div className="columns contact-details">
              <p className="address">
                <span>Brazilian, Based in {resumeData.address} </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
