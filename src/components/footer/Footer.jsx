import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="social-media">
          <img src="src/assets/images/icons/SM-x.svg" alt="twitter" />
          <img src="src/assets/images/icons/SM-instagram.svg" alt="instagram" />
          <img src="src/assets/images/icons/SM-facebook.svg" alt="facebook" />
          <img src="src/assets/images/icons/SM-youtube.svg" alt="youtube" />
          <img src="src/assets/images/icons/SM-tiktok.svg" alt="tiktok" />
        </div>
        <div className="footer-text">
          <p>
            <img
              className="flag"
              src="src/assets/images/icons/Spain.svg"
              alt="spain_flag"
            />
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
