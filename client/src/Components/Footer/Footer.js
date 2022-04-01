import React from "react";
import { Icon } from "react-icons-kit";
import { facebook } from "react-icons-kit/feather/facebook";
import { instagram } from "react-icons-kit/feather/instagram";
import { youtube } from "react-icons-kit/feather/youtube";
import "./Footer.css";
import logo from "../../Images/logo1.png";

export default function Footer() {
  return (
    <footer className="footer-wrapper">
      <div className="container">
        <div className="row-wrapper">
          <div className="row logo-icon-wrapper">
            <div className="logo">
              <img src={logo} />
            </div>
            <div className="Icon">
              <a href="https://www.facebook.com/EthiopiansNetwork">
                <Icon icon={facebook} size={25} />
              </a>
              <a href="https://www.instagram.com/evangaditech/">
                <Icon icon={instagram} size={25} />
              </a>
              <a href="https://www.youtube.com/c/weareethiopians">
                <Icon icon={youtube} size={25} />
              </a>
            </div>
          </div>

          <div className="row row1">
            <div className="Useful-Link ">
              <h3> Useful Link</h3>
              <h6>
                <a href="https://www.evangadi.com/explained/">How it works</a>
              </h6>
              <h6>
                <a href="https://www.evangadi.com/legal/terms/">
                  Terms of Service
                </a>
              </h6>
              <h6>
                <a href="https://www.evangadi.com/legal/privacy/">
                  Privacy policy
                </a>
              </h6>
            </div>
          </div>
          <div className="row row1">
            <div className="Contact-Info">
              <h3> Contact Info</h3>
              <h6>Evangadi Networks</h6>
              <h6>support@evangadi.com</h6>
              <h6>+1-202-386-2702</h6>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
