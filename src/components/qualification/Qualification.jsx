import React from "react";
import { motion } from "framer-motion";
import "./qualification.scss";
import { FaToolbox, FaUserGraduate } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";
import cinchyLogo from "../../img/cinchyLogo.svg";
import depaulIcon from "../../img/depaulIcon.svg";
import iitLogo from "../../img/iitLogo.svg";
import uofcLogo from "../../img/uofcLogo.svg";

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
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="itemHeader"
            >
              <FaUserGraduate className="icon"></FaUserGraduate>
              <h6 style={{ fontFamily: "var(--font-mono)" }}>
                Where I've studied
              </h6>
            </motion.div>
            <div className="itemContentWrapper">
              <motion.div
                initial={{ height: 0, opacity: 1 }}
                whileInView={{ height: "100%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="left"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="icon"
                >
                  <img src={depaulIcon} alt="depaul icon" />
                </motion.div>
                <motion.div
                  className="icon2"
                  initial={{ opacity: 0 }}
                  whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                >
                  <img src={iitLogo} alt="iit Logo" />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ x: [70, -10, 0], opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
                className="right"
              >
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
              </motion.div>
            </div>
          </div>
          <div className="item">
            <motion.div
              initial={{ y: 70, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="itemHeader"
            >
              <FaToolbox className="icon"></FaToolbox>
              <h6 style={{ fontFamily: "var(--font-mono)" }}>
                Where I've worked
              </h6>
            </motion.div>
            <div className="itemContentWrapper">
              <motion.div
                initial={{ height: 0, opacity: 1 }}
                whileInView={{ height: "100%", opacity: 1 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="left"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="icon"
                >
                  <img src={cinchyLogo} alt="depaul icon" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ scale: [0, 1.3, 1], opacity: 1 }}
                  transition={{ duration: 0.7, delay: 1 }}
                  className="icon4"
                >
                  <img src={uofcLogo} alt="iit Logo" />
                </motion.div>
              </motion.div>
              <motion.div
                className="right"
                initial={{ opacity: 0 }}
                whileInView={{ x: [70, -10, 0], opacity: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
              >
                <div className="schoolContent">
                  <div className="triangle"></div>
                  <h6>
                    Software Engineer
                    <span>
                      <a
                        href="https://www.cinchy.life/"
                        className="companyLink"
                        target="_blank"
                      >
                        @Cinchy
                      </a>
                    </span>
                  </h6>
                  <label>July 2022 - current</label>

                  <ul>
                    <li>
                      Architected and implemented major features of Cinchy's
                      responsive user interface using Javascript, React, and
                      SCSS
                    </li>
                    <li>
                      Built and shipped the One Time Password (OTP) for user
                      login by leveraging WhatsApp API integrations
                    </li>
                    <li>
                      Developed and styled interactive custom admin dashboard
                      using NodeJs and React.
                    </li>
                    <li>
                      Collaborated with designers to ensure thoughtful and
                      consistent user experiences across Cinchy's web
                      application
                    </li>
                  </ul>
                </div>
                <div className="schoolContent">
                  <div className="triangle"></div>
                  <h6>
                    Project Engineer{" "}
                    <span>
                      <a
                        href="https://www.uchicagomedicine.org/"
                        className="companyLink"
                        target="_blank"
                      >
                        @University of Chicago
                      </a>
                    </span>
                  </h6>
                  <div className="title">
                    <label>September 2019 - July 2022</label>
                  </div>
                  <ul className="list">
                    <li>
                      Built and delivered technical solutions according to
                      stakeholder business requirements. Provide project
                      controls by updating ledger software to monitor invoice
                      and expenses.
                    </li>

                    <li>
                      Identify risk to construction project delivery and develop
                      mitigating strategies to avoid potential negative outcomes
                      by managing cost, scope, and schedule
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Qualification;
