import React from "react";
import "./addToCart.css";
import Button from "../button/Button";

const AddToCart = ({ color, quantity, product, price, image }) => {
  return (
    <>
      <Button
        onClick={() => {
          //Pasa `localStorage.getItem("cart")` a la función JSON.parse
          //Pero si `localStorage.getItem("cart")` vale `null` o `undefined` pásale `"[]"`
          const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");

          //busca que el color y producto seleccionados estén ya en el carrito para no añadir duplicados
          const element = cart.find(
            (element) => element.color === color && element.product === product
          );
          //si hay un producto con el mismo tipo y mismo color suma las cantidades
          if (element) {
            element.quantity = element.quantity + quantity;
          } else {
            //si no, añadirlo
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
