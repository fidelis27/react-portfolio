import React, { Component } from 'react';
import './Portfolio.css'
import BancoDev from '../assets/images/bancoDev.png'
import Series from '../assets/images/series.png'

export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <h1 className="text-center">Confira alguns de meus projetos</h1>
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-4 col-sm-6 img-portfolio">
              
                <a href="https://bancodev-front.herokuapp.com/"title="app banco do Dev" target="_blank"><img src={BancoDev}></img></a>
                <h3>Banco do Dev REACT</h3>
                <p>App desenvolvido com React e banco de dados MongoDB.
                   Neste app fui capaz de explorar CRUD e status do component em react.
                </p>
              
            </div>
            <div className="col-lg-4 col-sm-6 img-portfolio">
              
                <a href="https://frontend-series-app.herokuapp.com/" title="app Gerenciar séries" target="_blank"><img  src={Series}></img></a>
                <h3>Series app REACT</h3>
                <p>App desenvolvido com React e banco de dados MongoDB.
                   Neste app fui capaz de explorar CRUD e status do component em react.</p>
              
            </div>
          </div>
        </div>
      </section>
    );
  }
}