import { ActionTypes } from "../constants/action-types";

const initialState = {
  products: [
    {
      id: 1,
      title: "image 1",
      category: "image",
    },
  ],
};
export const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_PRODUCTS:
      return state;

    case ActionTypes.SELECTED_PRODUCT:
      return state;

    default:
      return state;
  }
};
