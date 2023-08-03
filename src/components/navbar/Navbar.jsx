import React from "react";
import "./navbar.scss";
import myIcon from "../../img/myIcon.png";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <div className="navbarLeft">
        <img className="myIcon" src={myIcon} alt="my icon" />
        <div className="name">Masnaga</div>
        <span>toggle</span>
      </div>
      <div className="navbarRight">
        <div className="navbarList">
          <ul>
            <li>Home</li>
            <li>Services</li>
            <li>Experience</li>
            <li>Portfolio</li>
            <li>Testimonial</li>
          </ul>
        </div>
        <button className="button">Contact</button>
      </div>
    </div>
  );
};

export default Navbar;
