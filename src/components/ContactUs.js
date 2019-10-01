import React, { Component } from 'react';
import './ContactUs.css'
export default class ContactUs extends Component {
  render() {
    /* let resumeData = this.props.resumeData; */
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="col-lg-12 pl-30">
              
              <h3>Sinta-se a vontade para entrar em contato comigo!</h3>
              
            </div>
          </div>          
          <div className="row">
            <aside className="col-lg-8 columns footer-widgets">
              <div className="widget">
                <h5>Email :
                  thiago.fidelis27@gmail.com
                </h5>
                <h5>Celular/Whatsapp :
                  (16) 99102-1581
                </h5>
                <i className="fa fa-whatsapp-square"/>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}