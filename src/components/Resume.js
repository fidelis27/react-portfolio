import React, { Component } from "react";
import "./Resume.css";
import LogoConquer from "../assets/images/conquer.png";

export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="col-lg-3 columns header-col">
            <h1 className="text-center">
              <span>Academic education</span>
            </h1>
          </div>

          <div className="col-lg-9 columns main-col">
            {resumeData.education &&
              resumeData.education.map((item, index) => {
                return (
                  <div key={index} className="row item">
                    <div className="col-lg-12 columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} <br />
                          {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row work">
          <div className="col-lg-3 columns header-col">
            <h1 className="text-center">
              <span>Job</span>
            </h1>
          </div>

          <div className="col-lg-9 columns main-col">
            {resumeData.work &&
              resumeData.work.map((item, index) => {
                return (
                  <div key={index} className="row item">
                    <div className="col-lg-12 columns">
                      <h3
                        dangerouslySetInnerHTML={{ __html: item.CompanyName }}
                      />
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          Since {item.MonthOfLeaving} {item.YearOfLeaving}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="col-lg-3 columns header-col">
            <h1>
              <span>Skill</span>
            </h1>
          </div>
          <div className="col-lg-9 columns main-col ">
            <h3>
              <span className="info">
                Tools, languages, and other things that I work with.• 2020
              </span>
            </h3>

            <div className="container">
              <table>
                <tbody>
                  <tr>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/442c452cb73752bb1914ce03fce2017056d651a2099696b8594ddf5ccc74825e/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6176617363726970742f6a6176617363726970742d6f726967696e616c2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                        />
                      </a>
                      <p dir="auto">Javascript</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/27d0b117da00485c56d69aef0fa310a3f8a07abecc8aa15fa38c8b78526c60ac/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f72656163742f72656163742d6f726967696e616c2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                        />
                      </a>
                      <p dir="auto">React</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/redux/redux-original.svg"
                      >
                        <img
                          alt="icon tech"
                          src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/redux/redux-original.svg"
                          width="50"
                        />
                      </a>
                      <p dir="auto">Redux</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/26a528f097ecb4f4b3987ad74cd3086870e930d85124c2a352dbde9e3cd14cb7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6578746a732f6e6578746a732d6f726967696e616c2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/26a528f097ecb4f4b3987ad74cd3086870e930d85124c2a352dbde9e3cd14cb7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6578746a732f6e6578746a732d6f726967696e616c2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                        />
                      </a>
                      <p dir="auto">NextJS</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/fd37a0ed465d6e14411705324a0d21739377f54ab6d0ae146c68fca8777e16c7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6573742f6a6573742d706c61696e2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/fd37a0ed465d6e14411705324a0d21739377f54ab6d0ae146c68fca8777e16c7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6a6573742f6a6573742d706c61696e2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                        />
                      </a>
                      <p dir="auto">Jest</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/kubernetes/kubernetes-plain.svg"
                      >
                        <img
                          alt="icon tech"
                          src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/kubernetes/kubernetes-plain.svg"
                          width="50"
                        />
                      </a>
                      <p dir="auto">kubernets</p>
                    </td>
                  </tr>
                  <tr>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/ba2d3169d2186a32a473f51969808621fa9f5523963e4b6c70e99bdbcde97cf7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d706c61696e2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/ba2d3169d2186a32a473f51969808621fa9f5523963e4b6c70e99bdbcde97cf7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6e6f64656a732f6e6f64656a732d706c61696e2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg"
                        />
                      </a>
                      <p dir="auto">NodeJS</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-original.svg"
                      >
                        <img
                          alt="icon tech"
                          src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/html5/html5-original.svg"
                          width="50"
                        />
                      </a>
                      <p dir="auto">HTML5</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/0acfb66ff89d656d796de72f1b001e92dc51bc88139b5b344339a808d35090d5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d7973716c2f6d7973716c2d706c61696e2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/0acfb66ff89d656d796de72f1b001e92dc51bc88139b5b344339a808d35090d5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6d7973716c2f6d7973716c2d706c61696e2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-plain.svg"
                        />
                      </a>
                      <p dir="auto">MySQL</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/f64a041d6d0cda76988a117724ce3b3272b8fc5f9f742c4dcb9160be9a2c41c1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f646f636b65722f646f636b65722d706c61696e2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/f64a041d6d0cda76988a117724ce3b3272b8fc5f9f742c4dcb9160be9a2c41c1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f646f636b65722f646f636b65722d706c61696e2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-plain.svg"
                        />
                      </a>
                      <p dir="auto">Docker</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/9b70a59580f9cdb57e2083a8085cfb55614d3c145cc56ac8a3d3b81870d0f3d1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f616d617a6f6e77656273657276696365732f616d617a6f6e77656273657276696365732d6f726967696e616c2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/9b70a59580f9cdb57e2083a8085cfb55614d3c145cc56ac8a3d3b81870d0f3d1/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f616d617a6f6e77656273657276696365732f616d617a6f6e77656273657276696365732d6f726967696e616c2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
                        />
                      </a>
                      <p dir="auto">AWS</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/sass/sass-original.svg"
                      >
                        <img
                          alt="icon tech"
                          src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/sass/sass-original.svg"
                          width="50"
                        />
                      </a>
                      <p dir="auto">Sass</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3>
              <span className="info">
                Tools, Languages, and Other Things I'm Currently Studying 2022
              </span>
            </h3>

            <div className="container">
              <table>
                <tbody>
                  <tr>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/aa8b3e6b6fc55ea158e132e1c33ba6aa7fe49706a4e4bd64701af1cf89f514b5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/aa8b3e6b6fc55ea158e132e1c33ba6aa7fe49706a4e4bd64701af1cf89f514b5/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f747970657363726970742f747970657363726970742d6f726967696e616c2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                        />
                      </a>
                      <p dir="auto">TypeScript</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/4f06622b58ef8d2b07d366a4296dfa73965f02f2a824563afb0c4cca0665da97/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6772617068716c2f6772617068716c2d706c61696e2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/4f06622b58ef8d2b07d366a4296dfa73965f02f2a824563afb0c4cca0665da97/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f6772617068716c2f6772617068716c2d706c61696e2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                        />
                      </a>
                      <p dir="auto">GraphQL</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/storybook/storybook-original.svg"
                      >
                        <img
                          alt="icon tech"
                          src="https://raw.githubusercontent.com/devicons/devicon/2ae2a900d2f041da66e950e4d48052658d850630/icons/storybook/storybook-original.svg"
                          width="50"
                        />
                      </a>
                      <p dir="auto">Storybook</p>
                    </td>
                    <td align="center">
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://camo.githubusercontent.com/521b6af10b5409bdfefae1b331c084f5a9daa28290f347e4861fb17e817028f7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f706f737467726573716c2f706f737467726573716c2d706c61696e2e737667"
                      >
                        <img
                          alt="icon tech"
                          src="https://camo.githubusercontent.com/521b6af10b5409bdfefae1b331c084f5a9daa28290f347e4861fb17e817028f7/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f706f737467726573716c2f706f737467726573716c2d706c61696e2e737667"
                          width="50"
                          data-canonical-src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain.svg"
                        />
                      </a>
                      <p dir="auto">Postgres</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <hr />

        <div className="row conquer">
          <div className="col-lg-3 columns header-col">
            <h1 className="text-center">
              <span>Certifications</span>
            </h1>
          </div>

          <div className="col-lg-9 columns main-col">
            <div className="col-lg-12 col-sm-12">
              <h2>
                <span>Certifications Digital innovation one</span>
              </h2>
              <div className="img conquer">
                <img alt="logoconquer" src={LogoConquer}></img>
              </div>
            </div>
          </div>
        </div>

        <hr />
      </section>
    );
  }
}
