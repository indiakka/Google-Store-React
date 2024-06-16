import React from "react";
import "./button.css";

const Button = ({ onClick, buttonText }) => {
  return (
    <div>
      <button
        type="submit"
        onClick={onClick}
        className="text-bold button-purchase"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
