import React, { Component } from "react";
import "./ContactUs.css";
export default class ContactUs extends Component {
  render() {
    /* let resumeData = this.props.resumeData; */
    return (
      <section id="contact">
        <h3 section-head>FEEL FREE TO CONTACT ME!!</h3>

        <div className="row ">
          <div className="columns col-lg-12">
            <h5>Email : thiago.fidelis27@gmail.com</h5>
            <h5>Celular/Whatsapp : (16) 99102-1581</h5>
            <i className="fa fa-whatsapp-square" />
          </div>
        </div>
      </section>
    );
  }
}
