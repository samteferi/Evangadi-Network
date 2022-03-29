import React from "react";
import logo from "../Images/evangadi-logo-home.png";
import "../bootstrap/bootstrap.css";
import "./Header2.css";
import { Link } from "react-router-dom";
function Header2() {
  return (
    <div>
      <header className="headerCounter container-fluid fixed-top">
        <Link to="/" className="img1">
          <img src={logo} />
        </Link>
        <div className="rightSide">
          <a className="" href="">
            Home
          </a>
          <a className="" href="">
            How it Works
          </a>
          <div className="rightSide__button">
            <button className="btn">SIGN IN</button>
          </div>
        </div>
        <button className="ic">☰</button>
      </header>
    </div>

  
  );
}

export default Header2;
