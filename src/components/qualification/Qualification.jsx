import React from "react";
import { motion } from "framer-motion";
import "./qualification.scss";
import { FaToolbox, FaUserGraduate } from "react-icons/fa6";
import { GiGraduateCap } from "react-icons/gi";

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
          <motion.h5 className="title">
            <span className="number">02.</span>My Qualification
          </motion.h5>
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
