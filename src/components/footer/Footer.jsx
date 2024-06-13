import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="social-media">
          <img src="./icons/SM-x.svg" alt="twitter" />
          <img src="./icons/SM-instagram.svg" alt="instagram" />
          <img src="./icons/SM-facebook.svg" alt="facebook" />
          <img src="./icons/SM-youtube.svg" alt="youtube" />
          <img src="./icons/SM-tiktok.svg" alt="tiktok" />
        </div>
        <div className="footer-text">
          <p>
            <img className="flag" src="./icons/Spain.svg" alt="spain_flag" />
            Spain
          </p>
          <p>Privacy</p>
          <p>Google Nest Commitment to Privacy</p>
          <p>Sales Terms</p>
          <p>Terms of Service</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
