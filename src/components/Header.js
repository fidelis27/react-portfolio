import React, { Component } from 'react';
import './Header.css'
export default class Header extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>
      
      <header id="home">
         <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
          <a type ="button"className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
               <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
               <li><a className="smoothscroll" href="#about">Sobre</a></li>
               <li><a className="smoothscroll" href="#resume">Resumo</a></li>
               <li><a className="smoothscroll" href="#portfolio">Projetos</a></li>
               <li><a className="smoothscroll" href="#contact">Contato</a></li>
            </ul>
         </nav>

         <div className="row banner">
            <div className="banner-text">
               <h1 className="responsive-headline">{resumeData.name}<hr/></h1>
               <h3 style={{color:'#fff', fontFamily:'sans-serif '}}>Estou buscando ser um  {resumeData.role}.{resumeData.roleDescription}
               </h3>
               <hr/>
               <ul className="social">
                  {
                    resumeData.socialLinks && resumeData.socialLinks.map((item,index )=>{
                      return(
                              <li key={index}>
                                <a rel="noopener noreferrer" href={item.url} target="_blank"><i className={item.className}></i></a>
                              </li>
                            )
                          }
                    )
                  }
               </ul>
            </div>
         </div>

         <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
         </p>

      </header>
      </React.Fragment>
    );
  }
}