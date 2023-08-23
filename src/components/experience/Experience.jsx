import React from "react";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experienceContainer">
        <motion.div
          className="header"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h5 className="title">
            <span className="number">02.</span>Where I've Worked
          </h5>
          <div className="line"></div>
        </motion.div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="2011 - present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            // icon={
            //   <img
            //     src={cinchyLogo}
            //     alt="cinchy logo"
            //     object-containt
            //     className="w-[60%] h-[60%] object-contain"
            //   />
            // }
          >
            <h3 className="vertical-timeline-element-title">
              Software Engineer
            </h3>
            <p>
              Creative Direction, User Experience, Visual Design, Project
              Management, Team Leading
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default Experience;
