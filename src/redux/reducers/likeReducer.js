import { ActionTypes } from "../constants/action-types";
import axios from "axios";

const initialState = () => {
  return {
    imageDetails: async () => {
      await axios
        .get("http://localhost:5000/pictures/")
        .then((res) => {
          return res.data;
        })
        .catch((err) => {
          console.log(err);
          return [];
        });
    },
  };
};

export const likeReducer = (state = [], { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_IMAGES:
      return {
        state: payload.images,
      };

    case ActionTypes.SET_LIKE:
      const updated = state;
      return updated.filter((image) => {
        if (image.id === payload.id) {
          return {
            id: payload.id,
            likes: true,
            likeCount: image.likeCount + 1,
          };
        } else return image;
      });

    case ActionTypes.UNSET_LIKE:
      updated = state;
      return updated.filter((image) => {
        if (image.id === payload.id) {
          return {
            id: payload.id,
            likes: false,
            likeCount: image.likeCount - 1,
          };
        } else return image;
      });
    default:
      return state;
  }
};
