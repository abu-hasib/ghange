import React from "react";
import { formatPrice } from "../../constants";
import Button from '../Button'

const Product = ({
  category,
  description,
  id,
  image,
  price,
  title,
  addToCart,
}) => (
  <div>
    <h6>{title}</h6>
    <p>{category}</p>
    <p>{description}</p>
    <p>{formatPrice(price)}</p>
    <img
      src={image.replace(
        "https://fakestoreapi.com/",
        "https://fakestoreapi.herokuapp.com/"
      )}
      alt={title}
      className="App-logo"
    />
    <Button onClick={addToCart}>Add to Cart</Button>
  </div>
);

export default Product;
