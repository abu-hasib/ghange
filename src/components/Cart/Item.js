import React from "react";
import Button from "../Button";

const Item = ({
  title,
  quantity,
  removeFromCart,
  id,
  increaseQuantity,
  decreaseQuantity,
}) => (
  <div>
    <Button onClick={() => increaseQuantity(id)}>+</Button>
    <div>
      {title} quantity: {quantity}
    </div>
    <Button onClick={() => decreaseQuantity(id)} quantity={quantity}>
      -
    </Button>
    <Button onClick={() => removeFromCart(id)}>Remove</Button>
  </div>
);

export default Item;
