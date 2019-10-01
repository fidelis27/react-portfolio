import React, { Component } from 'react';
import './Portfolio.css'
import BancoDev from '../assets/images/bancoDev.png'
import Series from '../assets/images/series.png'

export default class Porfolio extends Component {
  render() {
    /* let resumeData = this.props.resumeData; */
    return (
      <section id="portfolio">
        <h1 className="text-center">Confira alguns de meus projetos</h1>
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-4 col-sm-6 img-portfolio">

              <a rel="noopener noreferrer" href="https://bancodev-front.herokuapp.com/" title="app banco do Dev" target="_blank"><img alt="bancodev" src={BancoDev}></img></a>
              <h3>Banco do Dev REACT</h3>
              <p>App desenvolvido com React e banco de dados MongoDB.
                 Neste app fui capaz de explorar CRUD e status do component em react.
                </p>
              <a className="btn btn-primary" type="button" rel="noopener noreferrer" href="https://bancodev-front.herokuapp.com/" title="app banco do Dev" target="_blank">ver</a>
            </div>
            <div className="col-lg-4 col-sm-6 img-portfolio">

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