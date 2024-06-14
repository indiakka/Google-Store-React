import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const Button = (text) => {
  return (
    <div>
      <button type="submit" className="text-bold button-purchase">
        {text.buttonText}
      </button>
    </div>
  );
};

export default Button;
