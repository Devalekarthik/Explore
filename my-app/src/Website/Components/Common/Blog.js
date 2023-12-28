import React from "react";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Data from "../../Data/data.json";
import ReadMoreandLess from "./ReadMoreandLess";

const Blog = () => {
  return (
    <div className="blog" id="Blog">
      <div className="blogHeading">
        <h1>{Data.blog.blogTitle}</h1>
        <p>{Data.blog.blogInfo}</p>
      </div>
      <div className="blogDetails">
        {Data.blog.blogDetails.map((item) => (
          <div className="blogCard">
            <div className="blogImg">
              <img src={item.img} />
            </div>
            <div className="blogImgDesc">
              <div>
                <h3>{item.descHead}</h3>
                <p>{item.descInfo.substring(0, 100)}...</p>
                <div className="blogReadMore">
                  Read More <ArrowRightAltIcon />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
