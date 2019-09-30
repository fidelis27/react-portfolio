import React, { Component } from 'react';
import './About.css'
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="col-lg-3 columns">

               <img className="profile-pic"  src="images/profilepic.png" alt="" />

            </div>

            <div className="col-lg-9  columns main-col">

               <h2>Sobre mim</h2>
               <p>
               {
                 resumeData.aboutme
               }
               </p>

               <div className="row m-0">

                  <div className="columns contact-details">

                  
                  <p className="address">
       						<span>Nartural</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
       					   </p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}