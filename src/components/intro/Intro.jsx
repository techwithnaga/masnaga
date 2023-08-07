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
        <div className="iconsVertical">
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
        </div>
        <div className="emailVertical">
          <a className="email" href="mailto:techwithnaga@gmail">
            techwithnaga@gmail.com
          </a>
          <div className="line"></div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
