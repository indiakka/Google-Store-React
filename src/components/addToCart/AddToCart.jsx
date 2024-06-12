import React from "react";
import Selector from "../selector/Selector";
import "./addToCart.css";

const AddToCart = () => {
  return (
    <>
      <div className="buy">
        <p className="titles bold">99,95€</p>
        <div className="option-container">
          <Selector />
          <button type="submit" className="text-bold">
            Add to Cart
          </button>
        </div>
        <p className="delivery text-bold bold">
          <img src="./icons/Delivery.svg" alt="delivery" />
          Delivers 29 Apr to <span>08023</span>
        </p>
      </div>
    </>
  );
};

export default AddToCart;
