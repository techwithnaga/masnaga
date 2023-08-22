import React, { useEffect, useState } from "react";
import "./navbar.scss";
import logo from "../../img/MLogo.svg";

import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const controlNavbar = () => {
    if (window.scrollY < lastScrollY) {
      setShowNavbar(true);
    } else {
      setShowNavbar(false);
    }

    setLastScrollY(window.scrollY);
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);
    }

    //clean up
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <nav className={`${showNavbar} ? "navBar" : "navBar hide"`}>
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
                <Link to="aboutme" spy={true} smooth={true} duration={600}>
                  <label className="number">01. </label>
                  About
                </Link>
              </motion.li>

              <motion.li
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ delay: 4.2, duration: 0.7 }}
              >
                <Link
                  to="qualification"
                  spy={true}
                  smooth={true}
                  duration={700}
                >
                  <label className="number">02. </label>
                  Qualification
                </Link>
              </motion.li>

              <motion.li
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ delay: 4.3, duration: 0.7 }}
              >
                <Link to="portfolio" spy={true} smooth={true} duration={800}>
                  <label className="number">03. </label>
                  Portfolio
                </Link>
              </motion.li>
              <motion.li
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ delay: 4.4, duration: 0.7 }}
              >
                <Link to="blogs" spy={true} smooth={true} duration={900}>
                  <label className="number">04. </label>
                  Blogs
                </Link>
              </motion.li>
              <motion.li
                animate={{ y: 0 }}
                initial={{ y: -100 }}
                transition={{ delay: 4.5, duration: 0.7 }}
              >
                <Link to="contact" spy={true} smooth={true} duration={1000}>
                  <label className="number">05. </label>
                  Contact
                </Link>
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
