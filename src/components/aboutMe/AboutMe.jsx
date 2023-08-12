import React from "react";
import "./aboutMe.scss";
import profilePic from "../../img/profilePic.png";
import {
  FaCss3Alt,
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaSass,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa6";
import viteIcon from "../../img/vite.svg";
import { IoLogoJavascript } from "react-icons/io5";
import { SiApollographql, SiRedux, SiGraphql, SiMongodb } from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <div className="aboutMe">
      <div className="aboutMeContainer">
        <div className="contentLeft">
          <motion.div
            className="header"
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.h5 className="title">
              <span className="number">01.</span>About Me
            </motion.h5>
            <div className="line"></div>
          </motion.div>

          <motion.div
            className="paragraph"
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
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
              days is building excellent user experiences and developing admin
              dashboard at Cinchy.
            </p>
            <br />
            <p>
              Below are the skills, tools, and technologies I have been working
              with recently:
            </p>
            <br />
          </motion.div>

          <motion.div
            className="gridContainer"
            initial={{ y: 70, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="gridItem">
              <FaReact className="icon" style={{ fill: "#61DBFB" }}></FaReact>
              <label className="text">React</label>
            </div>
            <div className="gridItem">
              <img className="icon" src={viteIcon}></img>
              <label className="text">Vite</label>
            </div>
            <div className="gridItem">
              <FaHtml5 className="icon" style={{ fill: "#F16529" }}></FaHtml5>

              <label className="text">HTML 5</label>
            </div>
            <div className="gridItem">
              <FaCss3Alt
                className="icon"
                style={{ fill: "#2965f1" }}
              ></FaCss3Alt>
              <label className="text">CSS 3</label>
            </div>
            <div className="gridItem">
              <FaSass className="icon" style={{ fill: "#CD6799" }}></FaSass>
              <label className="text">SASS</label>
            </div>
            <div className="gridItem">
              <IoLogoJavascript
                className="icon"
                style={{ fill: "#F0DB4F" }}
              ></IoLogoJavascript>
              <label className="text">Javascript</label>
            </div>
            <div className="gridItem">
              <SiApollographql
                className="icon"
                style={{ fill: "#78639a" }}
              ></SiApollographql>
              <label className="text">Apollo</label>
            </div>
            <div className="gridItem">
              <SiRedux className="icon" style={{ fill: "#764abc" }}></SiRedux>
              <label className="text">Redux</label>
            </div>
            <div className="gridItem">
              <FaNodeJs className="icon" style={{ fill: "#215732" }}></FaNodeJs>
              <label className="text">Node.js</label>
            </div>
            <div className="gridItem">
              <SiGraphql
                className="icon"
                style={{ fill: "#e535ab" }}
              ></SiGraphql>
              <label className="text">GraphQL</label>
            </div>
            <div className="gridItem">
              <SiMongodb
                className="icon"
                style={{ fill: "#4DB33D" }}
              ></SiMongodb>
              <label className="text">mongoDB</label>
            </div>
            <div className="gridItem">
              <FaGithub className="icon" style={{ fill: "#fafafa" }}></FaGithub>
              <label className="text">Github</label>
            </div>
            <div className="gridItem">
              <FaGitAlt className="icon" style={{ fill: "#F1502F" }}></FaGitAlt>
              <label className="text">Git</label>
            </div>
            <div className="gridItem">
              <TbBrandVscode
                className="icon"
                style={{ fill: "#0078d7" }}
              ></TbBrandVscode>
              <label className="text">VS Code</label>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="contentRight"
          initial={{ x: 150, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.div
            className="photoWrapper"
            whileHover={{ x: 5, y: 5, transition: { duration: 0.1 } }}
          >
            <motion.div
              className="photo"
              style={{ backgroundImage: `url(${profilePic})` }}
              whileHover={{ x: -5, y: -5, transition: { duration: 0.1 } }}
            ></motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
