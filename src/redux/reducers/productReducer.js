import { ActionTypes } from "../constants/action-type";

const initialstate = {
  Products: [
    {
      id: 1,
      name: "Product 1",
    }
  ],
};

export const ProductReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return {
        ...state,
        Products: payload,
      };
      break;
    default:
      return state;
      break;
  }
};
