import React, { Component } from "react";
import { connect } from "react-redux";
import { addProductToCart } from "./redux/actions";

class Ol extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log("prosp", this.props);
    const { products } = this.props.products;
    return (
      <>
        {products.map((el) => (
          <div>
            <p>{el.id}</p>
            <p>{el.title}</p>
          </div>
        ))}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("state!!!!: ", state);
  const { products } = state;
  return { products };
};

export default connect(mapStateToProps, { addProductToCart })(Ol);
