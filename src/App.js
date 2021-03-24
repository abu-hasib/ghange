import Axios from "axios";
import React from "react";
import "./App.css";

import { BASE_URL, findItemAndIndex } from "./constants";
import ProductList from "./components/Product";
import Button from "./components/Button";
import Cart from "./components/Cart";

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

    if (foundItem.quantity === 1) {
      return;
    }
    foundItem.quantity--;

    cart[index] = foundItem;

    this.setState({ cart });
  }

  clearCart() {
    this.setState({ cart: [] });
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
            <Button onClick={() => this.clearCart()}>Clear</Button>
            <Cart
              cart={cart}
              removeFromCart={this.removeFromCart}
              increaseQuantity={this.increaseQuantity}
              decreaseQuantity={this.decreaseQuantity}
            />
            <ProductList addToCart={this.addToCart} products={products} />{" "}
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

export default App;
