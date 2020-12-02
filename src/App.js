import Axios from "axios";
import React from "react";
import logo from "./logo.svg";
import "./App.css";

const BASE_URL = "https://fakestoreapi.com/products/";

class App extends React.Component {
  componentDidMount() {
    console.log("Mounting...");
    this.fetchProductsFromStore();
  }

  fetchProductsFromStore() {
    Axios(BASE_URL)
      .then(({ data }) => this.setState({ products: data }))
      .catch((error) => this.setState({ error }));
  }

  addToCart(item) {
    console.log("ading to cart....", item);

    const updatedCart = [...this.state.cart];
    const updatedItemIndex = updatedCart.findIndex(
      (itemInCart) => itemInCart.id === item.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...item, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };

      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }

    this.setState({ cart: updatedCart });
  }

  removeFromCart(id) {
    console.log("removing..", id);
    const cart = [...this.state.cart];
    const updatedItems = cart.filter((item) => item.id !== id);

    this.setState({ cart: updatedItems });
  }

  increaseQuantity(id) {
    console.log("increasing...", id);
    const cart = [...this.state.cart];
    const { index, foundItem } = findItemAndIndex(cart, id);

    foundItem.quantity++;

    cart[index] = foundItem;

    this.setState({ cart });
  }

  decreaseQuantity(id) {
    console.log("decreasing...", id);
    const cart = [...this.state.cart];
    const { index, foundItem } = findItemAndIndex(cart, id);

    if(foundItem.quantity === 1) {
      return
    }
    (foundItem.quantity)--

    cart[index] = foundItem;

    this.setState({ cart });
  }

  clearCart() {
    this.setState({cart: []})
  }

  render() {
    const { error, products, cart } = this.state;
    console.log("rendering...");
    return (
      <>
        {error ? (
          <h1>Something is wrong</h1>
        ) : (
          <div className="App">
            <Button onClick={() => this.clearCart()} >Clear</Button>
            <Cart
              cart={cart}
              removeFromCart={this.removeFromCart}
              increaseQuantity={this.increaseQuantity}
              decreaseQuantity={this.decreaseQuantity}
            />
            <ProductsList addToCart={this.addToCart} products={products} />{" "}
          </div>
        )}
      </>
    );
  }

  constructor() {
    super();
    console.log("constructing");
    this.state = {
      products: null,
      cart: [],
    };

    this.addToCart = this.addToCart.bind(this);
    this.removeFromCart = this.removeFromCart.bind(this);
    this.increaseQuantity = this.increaseQuantity.bind(this);
    this.decreaseQuantity = this.decreaseQuantity.bind(this);
  }

  componentWillUnmount() {
    console.log("unmounting...");
  }
}

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
    <img src={image} alt={title} className="App-logo" />
    <Button onClick={addToCart}>Add to Cart</Button>
  </div>
);

const ProductsList = ({ products, addToCart }) =>
  products ? (
    products.map((item) => (
      <Product addToCart={() => addToCart(item)} key={item.id} {...item} />
    ))
  ) : (
    <Loading />
  );

const Loading = () => <img className="App-logo" src={logo} alt={logo} />;

const Button = ({ onClick, children, quantity }) => (
  <button disabled={quantity === 1} onClick={onClick}>{children}</button>
);

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
    <Button onClick={() => decreaseQuantity(id)} quantity={quantity}>-</Button>
    <Button onClick={() => removeFromCart(id)}>Remove</Button>
  </div>
);

const Cart = ({ cart, removeFromCart, increaseQuantity, decreaseQuantity }) =>
  cart.map((item) => (
    <Item
      removeFromCart={removeFromCart}
      increaseQuantity={increaseQuantity}
      decreaseQuantity={decreaseQuantity}
      {...item}
    />
  ));

const formatPrice = (price) => `$${price}`;

const findItemAndIndex = (array, id) => {
  const foundItem = array.find((item) => item.id === id);
  const index = array.findIndex((itemInCart) => itemInCart.id === id);
  return { index, foundItem };
};

export default App;
