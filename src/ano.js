import React, { useEffect } from "react";
import { connect } from "react-redux";
import fetchPostsWithRedux from "./utils/init";
import { getProducts, getProductsError, getProductsPending } from "./redux/reducers/api";
import { bindActionCreators } from 'redux';
import { fetchPostsError } from "./redux/actions";



const Ano = (props) => {
    useEffect(() => {
        fetchPostsWithRedux()
    })
  console.log("Anp@@@@: ", props);
  return (
      <></>
  )
};

const mapStateToProps = state => ({
    error: getProductsError(state),
    products: getProducts(state),
    pending: getProductsPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchPostsWithRedux
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Ano);
