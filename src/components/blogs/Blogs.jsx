import React from "react";
import "./blogs.scss";
import { motion } from "framer-motion";
import BlogCard from "../blogCard/BlogCard";

const Blogs = () => {
  return (
    <div className="blogs" id="blogs">
      <div className="blogsContainer">
        <motion.div
          className="header"
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
        >
          <h5 className="title">
            <span className="number">04.</span>
            What I Wrote
          </h5>
          <div className="line"></div>
        </motion.div>

        <motion.div
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75, delay: 0.5 }}
          className="contentHeader"
        >
          <h6>New Releases </h6>
          {/* <a href="/">View All</a> */}
        </motion.div>

        <motion.div
          initial={{ y: 70, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="contentContainer"
        >
          <div className="card">
            <BlogCard
              blogImg="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="How to get started with Node JS, the easiest way to create"
              date="Sept 19, 2023"
              tags={["Node", "backend"]}
              time={4}
            ></BlogCard>
          </div>
          <div className="card">
            {" "}
            <BlogCard
              blogImg="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="How to get started with Node JS, the easiest way to create"
              date="Sept 19, 2023"
              tags={["Node", "backend"]}
              time={4}
            ></BlogCard>
          </div>
          <div className="card">
            {" "}
            <BlogCard
              blogImg="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="How to get started with Node JS, the easiest way to create"
              date="Sept 19, 2023"
              tags={["Node", "backend"]}
              time={4}
            ></BlogCard>
          </div>
          <div className="card">
            {" "}
            <BlogCard
              blogImg="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="How to get started with Node JS, the easiest way to create"
              date="Sept 19, 2023"
              tags={["Node", "backend"]}
              time={4}
            ></BlogCard>
          </div>
          <div className="card">
            {" "}
            <BlogCard
              blogImg="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="How to get started with Node JS, the easiest way to create"
              date="Sept 19, 2023"
              tags={["Node", "backend"]}
              time={4}
            ></BlogCard>
          </div>
          <div className="card">
            {" "}
            <BlogCard
              blogImg="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              title="How to get started with Node JS, the easiest way to create"
              date="Sept 19, 2023"
              tags={["Node", "backend"]}
              time={4}
            ></BlogCard>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blogs;
