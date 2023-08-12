import React from "react";
import "./navbar.scss";
import logo from "../../img/MLogo.svg";

import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navbarContainer">
        <div className="navbarLeft">
          <motion.img
            className="myLogo"
            src={logo}
            alt="my icon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 4 }}
          />

          {/* <span>toggle</span> */}
        </div>
        <div className="navbarRight">
          <div className="navbarList">
            <ul>
              <motion.li
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ delay: 4.1, duration: 0.7 }}
              >
                <label className="number">01. </label>
                About
              </motion.li>
              <motion.li
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ delay: 4.2, duration: 0.7 }}
              >
                <label className="number">02. </label>
                Qualification
              </motion.li>
              <motion.li
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ delay: 4.3, duration: 0.7 }}
              >
                <label className="number">03. </label>
                Portfolio
              </motion.li>
              <motion.li
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ delay: 4.4, duration: 0.7 }}
              >
                <label className="number">04. </label>
                Blogs
              </motion.li>
              <motion.li
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ delay: 4.5, duration: 0.7 }}
              >
                <label className="number">05. </label>
                Testimonial
              </motion.li>
            </ul>
          </div>
          <motion.button
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            transition={{ duration: 1, delay: 4.8 }}
            className="goldButton resumeBtn"
          >
            Resume
          </motion.button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
