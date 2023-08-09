import React from "react";
import "./aboutMe.scss";
import profilePic from "../../img/profilePic.png";

import { FaCss3Alt, FaReact, FaHtml5 } from "react-icons/fa6";
import viteIcon from "../../img/vite.svg";
import { IoLogoJavascript } from "react-icons/io5";
import { SiApollographql, SiRedux } from "react-icons/si";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMeContainer">
        <div className="contentLeft">
          <div className="header">
            <h5 className="title">
              <span className="number">01.</span>About Me
            </h5>
            <div className="line"></div>
          </div>

          <div className="paragraph">
            <p>
              Hello! My Name is Masnaga and I am a software engineer
              specializing in developing scalable web applications. I enjoy
              building things on the front-end as well as the back-end. My
              interest in web development started back in 2012 when I took an
              introduction to programming class as my elective class.
            </p>
            <br />
            <p>
              Fast-forward to today, and I've earned Master of Science in
              Computer Science and had the privilage of working at one of the
              best hospital in Chicago,a start-up company. My main focus these
              days is building a better digital experiences and developing admin
              dashboard at Cinchy.
            </p>
            <br />
            <p>
              Here are a few technologies I have been working with recently:
            </p>
            <br />
          </div>

          <div className="gridContainer">
            <div className="gridItem">
              <FaReact className="icon" style={{ color: "#61DBFB" }}></FaReact>
              <h6>React</h6>
            </div>
            <div className="gridItem">
              <img className="icon" src={viteIcon}></img>
              <h6>Vite</h6>
            </div>
            <div className="gridItem">
              <FaHtml5 className="icon" style={{ color: "#F16529" }}></FaHtml5>
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
              <SiRedux className="icon" style={{ color: "#764abc" }}></SiRedux>
              <h6>Redux</h6>
            </div>
          </div>
        </div>
        <div className="contentRight">
          <div className="square"></div>
          <img src={profilePic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
