import React, { useState, useEffect } from "react";
import "./details.css";  // Tvoje styly pro detail stránky
import "../../components/header/header.css";  // Předpokládám, že tu máš nějaké společné styly pro hlavičku
import { useParams } from "react-router-dom";  // Používáme useParams pro získání ID z URL
import { blog } from "../../assets/data/data";  // Importujeme data o článcích z data.js

export const DetailsPages = () => {
  const { id } = useParams();  // Získáme ID z URL
  const [blogs, setBlogs] = useState(null);  // Stav pro blog, který se načte

  useEffect(() => {
    // Najdi blog podle ID v poli blogů
    const foundBlog = blog.find((blog) => blog.id === parseInt(id));
    if (foundBlog) {
      setBlogs(foundBlog);  // Pokud najdeme blog, uložíme ho do stavu
    } else {
      setBlogs(null);  // Pokud blog není nalezen, nastavíme stav na null
    }
  }, [id]);  // Hook se spustí, když se změní ID

  return (
    <>
      {blogs ? (
        <section className="singlePage">  {/* Celá sekce pro blog detail */}
          <div className="container">  {/* Kontejner pro zarovnání */}
            <div className="left">  {/* Levá část pro obrázek */}
              <img src={blogs.cover} alt={blogs.title} loading="lazy" />  {/* Zobrazí obrázek s lazy loadingem */}
            </div>
            <div className="right">  {/* Pravá část pro text */}
              <h1>{blogs.title}</h1>  {/* Titulek článku */}
              {/* Používáme dangerouslySetInnerHTML pro renderování HTML v textu */}
              <div 
                className="blog-desc" 
                dangerouslySetInnerHTML={{ __html: blogs.desc }} 
              />
            </div>
          </div>
        </section>
      ) : (
        <p>Blog nenalezen!</p>  
      )}
    </>
  );
};
