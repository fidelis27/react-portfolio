import React, { Component } from 'react';
import './Resume.css'
import LogoHmtl from '../assets/images/technology/html.png'
import LogoJS from '../assets/images/technology/javascript.png'
import LogoReact from '../assets/images/technology/react.png'
import LogoCss3 from '../assets/images/technology/css.png'
import LogoConquer from '../assets/images/conquer.png'


export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">

        <div className="row education">

          <div className="col-lg-3 columns header-col">
            <h1 className="text-center"><span>Formação</span></h1>
          </div>

          <div className="col-lg-9 columns main-col">
            {
              resumeData.education && resumeData.education.map((item,index) => {
                return (
                  <div key={index} className="row item">
                    <div className="col-lg-12 columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} <br />{item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="row work">
          <div className="col-lg-3 columns header-col">
            <h1 className="text-center"><span>Trabalho</span></h1>
          </div>

          <div className="col-lg-9 columns main-col">
            {
              resumeData.work && resumeData.work.map((item,index) => {
                return (
                  <div key={index} className="row item">
                    <div className="col-lg-12 columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">Desde {item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>

                  </div>

                )
              })
            }
          </div>
        </div>



        <div className="row skill">
          <div className="col-lg-3 columns header-col">
            <h1><span>Skill</span></h1>
          </div>
          <div className="col-lg-9 columns main-col ">
            <h2><span>Certificações Digital innovation one</span></h2>
            <h3><span className="info">Diversas tecnologias• 2019</span></h3>

            <div className="container">
              <div className="row col-lg-12 ">
                <div className="col-lg-3 col-sm-6 col-xs-6 item">
                  <div className="img">
                    <img  alt="htmllogo" src={LogoHmtl}></img><span className="title"><h4>HTML5</h4></span>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 col-xs-6 item">
                  <div className="img">
                    <img alt ="reactlogo"src={LogoReact}></img><h4>React JS</h4>
                  </div>
                </div>
                <div className=" col-lg-3 col-sm-6 item">
                  <div className="img">
                    <img alt ="logojs"src={LogoJS}></img><span className="title"><h4>JavaScript</h4></span>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6 item">
                  <div className="img">
                    <img alt="logocss3"src={LogoCss3}></img><h4>CSS3</h4>
                  </div>
                </div>


              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="row conquer">

          <div className="col-lg-3 columns header-col">
            <h1 className="text-center"><span>Conquistas</span></h1>
          </div>

          <div className="col-lg-9 columns main-col">
            <div className="col-lg-12 col-sm-12">
              <h2><span>Conquistas Digital innovation one</span></h2>
              <div className="img conquer">
                <img alt ="logoconquer"src={LogoConquer}></img>
              </div>
            </div>
          </div>
        </div>

        <hr />



      </section>
    );
  }
}

