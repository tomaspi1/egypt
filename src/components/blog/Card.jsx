import React from "react"; 
import "./blog.css";
import { blog } from "../../assets/data/data";
import { AiOutlineTags, AiOutlineClockCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

// Funkce pro odstranění HTML tagů z textu
const stripHtmlTags = (html) => {
  return html.replace(/<[^>]*>/g, "");  // Tento regulární výraz odstraní všechny HTML tagy
};

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
              <span className="preview">{stripHtmlTags(item.desc).slice(0, 180)}...</span> {/* Odstranění HTML tagů a oříznutí na 180 znaků */}
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
