import React from "react"; 
import "./blog.css";
import { blog } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Card = () => {
  return (
    <section className="blog">
      <div className="container grid3">
        {blog.map((item) => (
          <div className="box boxItems" key={item.id}>
            <div className="img">
              <img src={item.cover} alt="" />
            </div>
            <div className="details">
              <div className="tag">
                <AiOutlineTags className="icon" />
                <span>{item.category}</span>
              </div>
              <Link to={`/details/${item.id}`} className="link">
                <h3>{item.title}</h3>
              </Link>
              <span className="preview">{item.desc.slice(0, 180)}...</span> {/* Změna z <p> na <span> */}
              <div className="date">
                <AiOutlineClockCircle className="icon" />
                <label htmlFor="">{item.date}</label>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
