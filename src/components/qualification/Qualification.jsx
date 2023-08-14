import React from "react";
import { motion } from "framer-motion";
import "./qualification.scss";
import { FaToolbox, FaUserGraduate } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import depaulIcon from "../../img/depaulIcon.svg";
import iitLogo from "../../img/iitLogo.svg";

const Qualification = () => {
  return (
    <div className="qualification">
      <div className="qualificationContainer">
        <motion.div
          className="header"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h4 className="title">
            <span className="number">02.</span>My Qualification
          </motion.h4>
          <div className="line"></div>
        </motion.div>

        <div className="contentWrapper">
          <div className="item">
            <div className="itemHeader">
              <FaUserGraduate className="icon"></FaUserGraduate>
              <h6 style={{ fontFamily: "var(--font-mono)" }}>
                Where I've studied
              </h6>
            </div>
            <div className="itemContentWrapper">
              <div className="left">
                <div className="icon">
                  <img src={depaulIcon} alt="depaul icon" />
                </div>
                <div className="icon2">
                  <img src={iitLogo} alt="iit Logo" />
                </div>
              </div>
              <div className="right">
                <div className="schoolContent">
                  <div className="triangle"></div>
                  <h6>Depaul University</h6>
                  <p>Master of Science in Computer Science</p>
                  <p>Software Engineering Concentration</p>
                  <label>GPA 3.6/4.0</label>
                  <br />
                  <br />
                  <label>Graduate Coursework:</label>
                  <ul>
                    <li>Service-Oriented Architecture</li>
                    <li>Object-Oriented Software Development</li>
                    <li>Principles of Database Management Systems</li>
                    <li>Agile Software Development</li>
                  </ul>
                </div>
                <div className="schoolContent">
                  <div className="triangle"></div>
                  <h6>Illinois of Institute of Technology</h6>
                  <p>Bachelor of Science</p>

                  <label>GPA 3.6/4.0</label>
                </div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="itemHeader">
              <FaToolbox className="icon"></FaToolbox>
              <h6 style={{ fontFamily: "var(--font-mono)" }}>
                Where I've worked
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
