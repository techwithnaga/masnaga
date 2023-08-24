import React from "react";
import "./blogCard.scss";
import { BsTags } from "react-icons/bs";

const BlogCard = (props) => {
  return (
    <div className="blogCard">
      <div className="blogImgContainer">
        <img src={props.blogImg} alt="" className="blogImg" />
      </div>

      <div className="body">
        <h6 className="title">{props.title}</h6>

        <div className="time">
          <label>{props.date}</label>
          <div className="dot"></div>
          <label htmlFor="timeToRead">{props.time} mins</label>
        </div>

        <div className="tags">
          <BsTags></BsTags>
          {props.tags?.map((item) => {
            return <label className="tag">{item}</label>;
          })}
        </div>
        {/* <div className="author">
          <img
            src="/src/img/profilePic.png"
            className="profilePic"
            alt="profilePic"
          />
          <label>Masnaga</label>
        </div> */}
      </div>
    </div>
  );
};

export default BlogCard;
