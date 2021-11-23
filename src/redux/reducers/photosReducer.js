import { ActionTypes } from "../constants/action-types";

export const photosReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.ADD_IMAGES:
      //adding new key like is true or not

      state = payload.images.map((image) => {
        return { ...image, likeStatus: "disliked" };
      });

      return {
        state,
      };

    case ActionTypes.SET_LIKE:
      console.log(state);
      console.log(payload);
      const likedState = state.state.map((image) => {
        if (image.photo_id === parseInt(payload.id)) {
          return {
            ...image,
            like_count: image.like_count + 1,
            likeStatus: "liked",
          };
        } else return image;
      });
      state = { state: likedState };

      return state;

    default:
      return state;
  }
};
