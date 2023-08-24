import React, { useRef, useEffect } from "react";
import "./intro.scss";
import profilePicNoBg from "../../img/profilePicNoBg.png";
import profilePic from "../../img/profilePic.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import blob2 from "../../img/blob2.svg";
import diploma from "../../img/diploma.svg";
import thumbup from "../../img/thumbup.png";
import { init } from "ityped";
import { motion } from "framer-motion";
import { Link, animateScroll as scroll } from "react-scroll";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Intro = () => {
  const txtRef = useRef();

  useEffect(() => {
    init(txtRef.current, {
      showCursor: true,
      backSpeed: 35,
      backDelay: 1000,
      typeSpeed: 60,
      strings: ["Full Stack Web Developer.", "Software Engineer."],
    });
  }, []);

  return (
    <div className="intro">
      <div className="introContainer">
        <svg
          width="51"
          height="44"
          viewBox="0 0 51 44"
          xmlns="http://www.w3.org/2000/svg"
          id="logo"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M36.0555 3.58538L46.7001 22.3067L35.8093 40.8858L14.2739 40.7437L3.62923 22.0224L14.52 3.44325L36.0555 3.58538ZM50.1641 22.3295L37.5215 43.8972L12.522 43.7322L0.165202 21.9996L12.8078 0.431889L37.8073 0.596877L50.1641 22.3295ZM30.2453 30.528V29.5863V29.3328V28.7651V28.396V24.7243V20.992V20.9396V20.896C30.2453 20.8385 30.2259 20.7955 30.1872 20.767C30.1684 20.7533 30.1451 20.7429 30.1173 20.736C30.0947 20.7284 30.0733 20.7262 30.0533 20.7294C30.0169 20.7351 29.9849 20.7587 29.9573 20.8L29.9108 20.896L29.1913 22.38L29.1644 22.4355L28.6205 23.5572L28.2717 24.2767L27.812 25.2247L27.7959 25.2581L27.6819 25.493L27.4527 25.9659L26.8853 27.136C26.8213 27.3067 26.6827 27.456 26.4693 27.584C26.3933 27.6296 26.3187 27.6725 26.2453 27.7127C26.1129 27.7853 25.9849 27.8491 25.8613 27.904L25.6053 28C25.3472 28 25.1232 27.9561 24.9333 27.8684C24.6367 27.7313 24.4234 27.4872 24.2933 27.136L23.7173 25.948L23.4968 25.4931L23.3725 25.2369L23.3667 25.2247L22.907 24.2767L22.5542 23.5491L22.0143 22.4355L21.9988 22.4036L21.2679 20.896L21.2213 20.8C21.2028 20.7444 21.1602 20.721 21.0933 20.7298C21.0832 20.7311 21.0726 20.7332 21.0613 20.736C21.0279 20.7444 21.001 20.7576 20.9807 20.7758C20.9491 20.804 20.9333 20.8441 20.9333 20.896V20.9396V24.7237V28.3804V28.7651V29.3629V29.6672V30.528C20.9333 30.9333 20.784 31.2853 20.4853 31.584C20.208 31.8613 19.8667 32 19.4613 32H18.5653C18.16 32 17.808 31.8613 17.5093 31.584C17.232 31.2853 17.0933 30.9333 17.0933 30.528V29.6489V20.896V19.7461V11.84C17.0933 11.4133 17.232 11.0613 17.5093 10.784C17.808 10.5067 18.16 10.368 18.5653 10.368H19.4933C20.0907 10.368 20.528 10.6453 20.8053 11.2C20.912 11.4347 21.1253 11.8933 21.4453 12.576C21.7867 13.2373 22.1813 14.0267 22.6293 14.944C22.8726 15.442 23.1189 15.9558 23.3684 16.4852C23.4985 16.7612 23.6294 17.0414 23.7611 17.3259C23.8422 17.501 23.9236 17.6777 24.0053 17.856L24.0555 17.9586L24.6357 19.1446L24.8531 19.5894L25.2996 20.5031L25.3056 20.5154L25.4133 20.736C25.4368 20.783 25.4635 20.817 25.4935 20.8381C25.518 20.8554 25.5446 20.864 25.5733 20.864C25.615 20.864 25.6515 20.8539 25.683 20.8336C25.716 20.8122 25.7435 20.7797 25.7653 20.736L25.8731 20.5115L25.8765 20.5044L26.5317 19.1391L26.7581 18.6672L27.0603 18.0374L27.4024 17.3245L27.7966 16.5031L30.3413 11.2C30.6187 10.6453 31.0667 10.368 31.6853 10.368H32.5813C33.008 10.368 33.36 10.5067 33.6373 10.784C33.9147 11.0613 34.0533 11.4133 34.0533 11.84V19.6387V20.896V29.5863V30.528C34.0533 30.9333 33.9147 31.2853 33.6373 31.584C33.36 31.8613 33.008 32 32.5813 32H31.7173C31.312 32 30.96 31.8613 30.6613 31.584C30.384 31.2853 30.2453 30.9333 30.2453 30.528Z"
          />
        </svg>
        <motion.div
          className="iconsVertical"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 1.2, delay: 6 }}
        >
          <div className="icons">
            <BsGithub className="icon"></BsGithub>
            <BsLinkedin className="icon"></BsLinkedin>
            <BsTwitter className="icon"> </BsTwitter>
          </div>
          <div className="line"></div>
        </motion.div>
        <div className="introNameContainer">
          <div className="introName">
            <motion.h6
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.5, delay: 5.1 }}
              transition={{ duration: 0.5, delay: 5 }}
            >
              Hi, my name is{" "}
            </motion.h6>
            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5.3 }}
            >
              Masnaga.
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 5.6 }}
            >
              <h5 className="title">I'm a </h5>

              <h5 ref={txtRef} className="title"></h5>
              {/* <p>
                I'm a <span ref={txtRef} className="title"></span> based in
                Chicago specializing in developing exceptional digital
                experiences. Currently, I'm focused on building
                customer-centered products at
                <span style={{ color: "var(--gold)" }}>Cinchy</span>
              </p> */}
            </motion.div>
            {/* <p>
              I design and develop scalable web applications, improving company
              efficieny and productiviy.
            </p> */}
          </div>

          <div className="buttonContainer">
            <Link to="aboutme" spy={true} smooth={true} duration={700}>
              <motion.button
                className="goldButton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 5.9 }}
              >
                About Me
              </motion.button>
            </Link>
          </div>

          {/* <button className="button introButton"> Hire Me</button> */}
        </div>
        <motion.div
          className="emailVertical"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 7 }}
        >
          <a className="email" href="mailto:techwithnaga@gmail.com">
            techwithnaga@gmail.com
          </a>
          <div className="line"></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Intro;
