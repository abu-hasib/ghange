import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const BASE_URL = "https://fakestoreapi.com/products";

export default function getProducts() {
  return axios
    .get(BASE_URL)
    .then((response) => {
      // handle success
      response.data.map((payload) => {
        payload.uid = uuidv4();
        payload.quantity = 0;
      });
      console.log(response);
      return response;
    })
    .catch((error) => {
      // handle error
      console.log(error);
      //   return error;
    });
  // .then(function (response) {
  //   // always executed
  //   console.log("####: ", response);
  //   // return response
  // });
}
