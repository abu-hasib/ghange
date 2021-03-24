export const BASE_URL = "https://fakestoreapi.herokuapp.com/products/";

export const formatPrice = (price) => `$${price}`;

export const findItemAndIndex = (array, id) => {
  const foundItem = array.find((item) => item.id === id);
  const index = array.findIndex((itemInCart) => itemInCart.id === id);
  return { index, foundItem };
};
