import getProducts from "../../utils/api";
import { ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART } from "../actionTypes";

const initialState = {
  products: [
    {
      id: 1,
      title: "oe r,r",
    },
  ],
};

console.log("WE here!!!!");

export default function (state = initialState, action) {
  console.log("STE@@@@@: ", state);
  switch (action.type) {
    case ADD_PRODUCT_TO_CART: {
      console.log("Rducer#####!!!: ", action.payload);
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false,
          },
        },
      };
    }
    case REMOVE_PRODUCT_FROM_CART: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed,
          },
        },
      };
    }
    default:
      return state;
  }
}
