import React from "react";
import "./tech.scss";

import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa6";
import viteIcon from "../../img/vite.svg";
import { IoLogoJavascript } from "react-icons/io5";
import { SiApollographql, SiRedux } from "react-icons/si";

const Tech = () => {
  return (
    <div className="tech">
      <div className="techContainer">
        <div className="top">
          <h1>Skills</h1>
          <p>
            I have used many web technologies in the past 5 years from Angular
            to React and from Java to Javascript. However, these are some of
            technologies that I like to use to build web applications.
          </p>
        </div>
        <div className="bottom">
          <div className="blur1"></div>
          <div className="blur2"></div>
          <div className="cards">
            <div className="card">
              <h3>Frontend</h3>
              <br />

              <div className="gridContainer">
                <div className="gridItem">
                  <FaReact
                    className="icon"
                    style={{ color: "#61DBFB" }}
                  ></FaReact>
                  <h6>React</h6>
                </div>
                <div className="gridItem">
                  <img className="icon" src={viteIcon}></img>
                  <h6>Vite</h6>
                </div>
                <div className="gridItem">
                  <FaHtml5
                    className="icon"
                    style={{ color: "#F16529" }}
                  ></FaHtml5>
                  <h6>HTML 5</h6>
                </div>
                <div className="gridItem">
                  <FaCss3Alt
                    className="icon"
                    style={{ color: "#2965f1" }}
                  ></FaCss3Alt>
                  <h6>CSS 3</h6>
                </div>
                <div className="gridItem">
                  <IoLogoJavascript
                    className="icon"
                    style={{ color: "#F0DB4F" }}
                  ></IoLogoJavascript>
                  <h6>Javascript</h6>
                </div>
                <div className="gridItem">
                  <SiApollographql
                    className="icon"
                    style={{ color: "#78639a" }}
                  ></SiApollographql>
                  <h6>Apollo</h6>
                </div>
                <div className="gridItem">
                  <SiRedux
                    className="icon"
                    style={{ color: "#764abc" }}
                  ></SiRedux>
                  <h6>Redux</h6>
                </div>
              </div>
            </div>

            <div className="card">
              <h3>Backend</h3>
              <br />
              <div className="gridContainer">
                <div className="gridItem">
                  <h6>Node</h6>
                </div>
                <div className="gridItem">
                  <h6>Javascript</h6>
                </div>
                <div className="gridItem">
                  <h6>Express</h6>
                </div>
                <div className="gridItem">
                  <h6>GraphQL</h6>
                </div>
              </div>
            </div>
            <div className="card">
              <h3>Database</h3>
              <br />
              <div className="gridContainer">
                <div className="gridItem">
                  <h6>MongoDB</h6>
                </div>
                <div className="gridItem">
                  <h6>PostgreSQL</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tech;
