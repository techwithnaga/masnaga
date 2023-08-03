import React, { useRef, useEffect } from "react";
import "./intro.scss";
import profilePicNoBg from "../../img/profilePicNoBg.png";
import crown from "../../img/crown.png";
import FloatingDiv from "../floatingDiv/FloatingDiv";
import blob2 from "../../img/blob2.svg";
import diploma from "../../img/diploma.svg";
import thumbup from "../../img/thumbup.png";
import { init } from "ityped";

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Intro = () => {
  const txtRef = useRef();

  useEffect(() => {
    init(txtRef.current, {
      showCursor: true,
      backSpeed: 60,
      backDelay: 1500,
      strings: [
        "Full Stack Web Developer",
        "Software Engineer",
        "Project Manager",
        "Co-Founder",
      ],
    });
  }, []);

  return (
    <div className="introContainer">
      <div className="introLeft">
        <div className="introName">
          <span>Hi there! I'm </span>
          <span>Masnaga</span>
          <div>
            <span className="title">A </span>
            <span ref={txtRef} className="title"></span>
          </div>
        </div>
        {/* <button className="button introButton"> Hire Me</button> */}

        <div className="introIcons">
          <BsGithub className="icon"></BsGithub>
          <BsLinkedin className="icon"></BsLinkedin>
          <BsTwitter className="icon"> </BsTwitter>
        </div>
      </div>
      <div className="introRight">
        <img
          style={{
            right: "18%",
            top: "-29%",
            transform: "scale(1.11)",
            zIndex: "-1",
          }}
          src={blob2}
        />

        <img src={profilePicNoBg} style={{ scale: "1.2" }}></img>

        <div style={{ right: "13%", top: "9%" }}>
          <FloatingDiv image={crown} txt1="Web" txt2="Developer"></FloatingDiv>
        </div>
        <div style={{ top: "43%" }}>
          <FloatingDiv
            image={diploma}
            txt1="Master in"
            txt2="Computer Science"
          ></FloatingDiv>
        </div>
        <div style={{ left: "5%", top: "-3%" }}>
          <FloatingDiv
            image={thumbup}
            txt1="Software"
            txt2="Engineer"
          ></FloatingDiv>
        </div>

        <div className="blur1"></div>
        <div className="blur2"></div>
      </div>
    </div>
  );
};

export default Intro;
