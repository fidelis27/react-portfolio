import React, { Component } from "react";
import "./Footer.css";
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
        <div className="row">
          <div className="col-lg-12 columns">
            <ul className="social-links">
              {resumeData.socialLinks &&
                resumeData.socialLinks.map((item, index) => {
                  return (
                    <li key={index}>
                      <a
                        rel="noopener noreferrer"
                        target="_blank"
                        href={item.url}
                      >
                        <i className={item.className} />
                      </a>
                    </li>
                  );
                })}
            </ul>
          </div>
          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="fa fa-arrow-circle-up" />
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
