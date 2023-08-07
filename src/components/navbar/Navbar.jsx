import React from "react";
import "./navbar.scss";
import myIcon from "../../img/myIcon.png";

const Navbar = () => {
  return (
    <nav className="navBar">
      <div className="navbarContainer">
        <div className="navbarLeft">
          {/* <img className="myIcon" src={myIcon} alt="my icon" /> */}
          <div className="name">M</div>
          <span>toggle</span>
        </div>
        <div className="navbarRight">
          <div className="navbarList">
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Portfolio</li>
              <li>Blogs</li>
              <li>Testimonial</li>
            </ul>
          </div>
          <button className="goldButton contactBtn">Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
