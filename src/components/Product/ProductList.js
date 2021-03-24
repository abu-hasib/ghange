import React from 'react'
import Loading from "../Loading";
import Product from "./Product";

const ProductList = ({ products, addToCart }) =>
  products ? (
    products.map((item) => (
      <Product addToCart={() => addToCart(item)} key={item.id} {...item} />
    ))
  ) : (
    <Loading />
  );

export default ProductList
