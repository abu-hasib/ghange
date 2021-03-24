import React from "react";

const Button = ({ onClick, children, quantity }) => (
  <button disabled={quantity === 1} onClick={onClick}>
    {children}
  </button>
);

export default Button;
