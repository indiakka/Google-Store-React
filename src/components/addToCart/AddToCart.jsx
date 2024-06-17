import React from "react";
import "./addToCart.css";
import Button from "../button/Button";

const AddToCart = ({ color, quantity, product, price, image }) => {
  return (
    <>
      <Button
        onClick={() => {
          const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
          const element = cart.find(
            (element) => element.color === color && element.product === product
          );
          if (element) {
            element.quantity = element.quantity + quantity;
          } else {

            cart.push({ color, quantity, product, price, image });
          }

          localStorage.setItem("cart", JSON.stringify(cart));
        }}
        buttonText="Add to Cart"
      ></Button>
    </>
  );
};

export default AddToCart;
