import { ActionTypes } from "../constants/action-type";

const initialstate = {
  id: 1,
  title: "This is title",
  category: "Coder",
};

export const ProductReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;
      break;
    default:
      return state;
      break;
  }
};
