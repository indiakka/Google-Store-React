import React from "react";
import Selector from "../selector/Selector";
import "./addToCart.css";
import Button from "../button/Button";
const AddToCart = () => {
  return (
    <>
      <div className="buy">
        <p className="titles bold">99,95€</p>
        <div className="option-container">
          <Selector />
          <Button buttonText="Add to Cart"></Button>
        </div>
        <p className="delivery text-bold bold">
          <img src="src/assets/images/icons/Delivery.svg" alt="delivery" />
          Delivers 29 Apr to <span>08023</span>
        </p>
      </div>
    </>
  );
};

export default AddToCart;
