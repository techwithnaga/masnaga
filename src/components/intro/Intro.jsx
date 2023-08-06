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

import { BsGithub, BsLinkedin, BsTwitter } from "react-icons/bs";

const Intro = () => {
  const txtRef = useRef();

  useEffect(() => {
    init(txtRef.current, {
      showCursor: true,
      backSpeed: 35,
      backDelay: 1000,
      typeSpeed: 60,
      strings: [
        "Full Stack Web Developer.",
        "Software Engineer.",
        "Co-Founder.",
      ],
    });
  }, []);

  return (
    <div className="intro">
      <div className="introContainer">
        <div className="iconsHz">
          <div className="icons">
            <BsGithub className="icon"></BsGithub>
            <BsLinkedin className="icon"></BsLinkedin>
            <BsTwitter className="icon"> </BsTwitter>
          </div>
          <div className="line"></div>
        </div>
        <div className="introLeft">
          <div className="introName">
            <h6>Hi, my name is </h6>
            <h1>Masnaga.</h1>
            <div>
              <h5 className="title">I'm a </h5>
              <h5 ref={txtRef} className="title"></h5>
            </div>
            {/* <p>
              I design and develop scalable web applications, improving company
              efficieny and productiviy.
            </p> */}
          </div>
          <div className="buttonContainer">
            <button className="goldButton">About Me</button>
          </div>

          {/* <button className="button introButton"> Hire Me</button> */}
        </div>
        <div className="introRight">
          <div
            className="bg"
            style={{ backgroundImage: `url(${profilePic})` }}
          ></div>

          <div className="floatingDiv1">
            <FloatingDiv image={crown} txt1="Web" txt2="Builder"></FloatingDiv>
          </div>
          <div className="floatingDiv2">
            <FloatingDiv image={thumbup} txt1="Cum" txt2="Laude"></FloatingDiv>
          </div>

          <div className="floatingDiv3">
            <FloatingDiv
              image={diploma}
              txt1="Master "
              txt2="in CS"
            ></FloatingDiv>
          </div>

          <div className="blur1"></div>
          <div className="blur2"></div>

          {/* <img
            style={{
              right: "18%",
              top: "-29%",
              transform: "scale(1.11)",
              zIndex: "-1",
            }}
            src={blob2}
          />

          <img src={profilePicNoBg} style={{ scale: "1.2" }}></img>

          <div style={{ right: "13rem", top: "9rem" }}>
            <FloatingDiv
              image={crown}
              txt1="Web"
              txt2="Developer"
            ></FloatingDiv>
          </div>
          <div style={{ top: "43rem" }}>
            <FloatingDiv
              image={diploma}
              txt1="Master in"
              txt2="Computer Science"
            ></FloatingDiv>
          </div>
          <div style={{ left: "5rem", top: "-3rem" }}>
            <FloatingDiv
              image={thumbup}
              txt1="Software"
              txt2="Engineer"
            ></FloatingDiv>
          </div>

          <div className="blur1"></div>
          <div className="blur2"></div> */}
        </div>
      </div>
    </div>
  );
};

export default Intro;
