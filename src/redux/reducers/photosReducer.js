import { ActionTypes } from "../constants/action-types";
import { createStore } from "redux";

export const photosReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_IMAGES:
      //adding new key like is true or not

      state = payload.images.map((image) => {
        return { ...image, likeStatus: false };
      });

      return {
        state,
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
