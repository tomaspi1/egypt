import React, { useState, useEffect } from "react";
import "./details.css";
import "../../components/header/header.css";
import { useParams } from "react-router-dom";
import { blog } from "../../assets/data/data";

export const DetailsPages = () => {
  const { id } = useParams();
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    // Najdi blog podle id
    const foundBlog = blog.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlogs(foundBlog);
    } else {
      setBlogs(null);  // Pokud není blog nalezen, nastav na null
    }
  }, [id]);

  return (
    <>
      {blogs ? (
        <section className="singlePage">
          <div className="container">
            <div className="left">
              <img src={blogs.cover} alt={blogs.title} />
            </div>
            <div className="right">
              <h1>{blogs.title}</h1> {/* Zobrazí titulek článku */}
              <p>{blogs.desc}</p>
{/*               <p>Author: {blogs.author || "Unknown"}</p>
 */}            </div>
          </div>
        </section>
      ) : (
        <p>Blog nenalezen!</p> // Pokud není blog nalezen, zobrazuje se zpráva
      )}
    </>
  );
};
