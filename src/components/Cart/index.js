import React from "react";
import Item from "./Item";

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) =>
  cart.map((item, index) => (
    <Item
      key={index}
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      {...item}
    />
  ));

export default Cart;
