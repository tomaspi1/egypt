import React from "react";
import logo from "../../assets/images/logo.gif";
import "./header.css";
import { User } from "./User";
import { nav } from "../../assets/data/data";
import { Link } from "react-router-dom";

export const Header = () => {
  window.addEventListener("scroll", function () {
    const header = this.document.querySelector(".header");
    header.classList.toggle("active", this.window.scrollY > 100);
  });

  return (
    <>
      <header className="header">
        <div className="scontainer flex">
          {/* TADY JE ODKAZ NA HOMEPAGE */}
          <div className="logo">
            <Link to="/">  
              <img src={logo} alt="logo" width="50px" />
            </Link>
          </div>

          <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* zakomentovano - panel na login */}
          {/* <div className='account flexCenter'>
            <User />
          </div> */}
        </div>
      </header>
    </>
  );
};
