import React, { Component } from 'react';
import './Portfolio.css'
import Aircnc from '../assets/images/login.jpg'
import Series from '../assets/images/series.png'

export default class Porfolio extends Component {
  render() {
    /* let resumeData = this.props.resumeData; */
    return (
      <section id="portfolio">
        <h1 className="text-center">Confira alguns de meus projetos</h1>
        <div className="row">
          <div className="col-lg-12">
            <div className=" img-portfolio">

              <a rel="noopener noreferrer" href="https://user-images.githubusercontent.com/45233696/76228318-54791e80-61ff-11ea-9572-3ac815424808.jpg" title="Aircnc" target="_blank"><img alt="bancodev" src={Aircnc}></img></a>
              <h3>Aircnc</h3>
              <p>App desenvolvido com React no bootcamp 09 da Rockeseat.
                </p>
              <a className="btn btn-primary" type="button"
                rel="noopener noreferrer" href="https://github.com/fidelis27/FrontEnd-Aircnc/"
                title="Aircnc front" target="_blank">FrontEnd</a>
              <a className="btn btn-primary" type="button"
                rel="noopener noreferrer" href="https://github.com/fidelis27/BackEnd-Aircnc"
                title="Aircnc back" target="_blank">BackEnd</a>
            </div>
            

            <div className="img-portfolio">
              <a href="https://frontend-series-app.herokuapp.com/" rel="noopener noreferrer" title="app Gerenciar séries" target="_blank"><img alt="series" src={Series}></img></a>
              <h3>Series app REACT</h3>
              <p>App desenvolvido com React e banco de dados MongoDB.
                 Neste app fui capaz de explorar CRUD e status do component em react.
                   </p>
              <a className="btn btn-primary" type="button" rel="noopener noreferrer" href="https://frontend-series-app.herokuapp.com/" title="app banco do Dev" target="_blank">ver</a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}