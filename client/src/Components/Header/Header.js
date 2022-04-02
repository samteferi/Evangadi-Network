import "./Header.css";
import React, { useContext } from "react";
import "./Header.css";
import logo from "../../Images/evangadi-logo-home.png";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
function Header1({ logout }) {
  const [userData, setUserData] = useContext(UserContext);
  const navigate = useNavigate();

  const goToSignIn = (e) => {
    e.preventDefault();
    if (userData.user) {
      logout();
    }
    navigate("/login");
  }
  return (
    <div className="header">
      <div className="innerContainer  d-flex  text-center  justify-content-around ">
        <Link to='/' className="header__image text-center">
          <img src={logo} alt="Evangadi logo"/>
        </Link>
        <button className='ic d-sm-block d-md-none'>
               ☰
        </button>
        <div className="d-flex  innerContainer2 text-center pt-3 justify-content-between">
          <a className="pt-2" href="">Home</a>
          <a className="pt-2" href="">How it Works</a>
          <div className="rightSide__button">
            <button className="btn_header" onClick={goToSignIn}>{userData.user? "LogOut" : "SIGN IN"}</button>
          </div>
        </div>
        
      </div>
     
    </div>
  );
}

export default Header1;
