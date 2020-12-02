import {
  fetchProductsPending,
  fetchProductsSuccess,
  fetchProductsError,
} from "../redux/actions";
import getProducts from "./api";

console.log("%#^%^$^%&$^%#^$@%#$^#%&$^*%&(*^$&%#^$@%#");

export default function fetchPostsWithRedux() {
  return (dispatch) => {
    dispatch(fetchProductsPending());
    getProducts().then(res => console.log("RRRR@@@@@#)#)@)#)@#)E)@!: ", res))
  };
}

function fetchPosts() {
  getProducts().then((response) => console.log("EKL$$$$: ", response));
}
