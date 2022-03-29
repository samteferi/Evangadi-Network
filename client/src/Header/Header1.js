import React from "react";
import "./Header1.css";
import logo from "../Images/evangadi-logo-home.png";
import { Link } from "react-router-dom";
function Header1() {
  return (
    <div className="header">
      <div className="header__container">
        <Link to='/' className="header__image">
          <img src={logo} alt="Evangadi logo" />
        </Link>
        <div className="rightSide">
          <a className="" href="">Home</a>
          <a className="" href="">How it Works</a>
          <div className="rightSide__button">
            <button className="btn">SIGN IN</button>
          </div>
        </div>
        <button className='ic'>
               ☰
        </button>
      </div>
    </div>
  );
}

export default Header1;
