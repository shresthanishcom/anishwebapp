import { ActionTypes } from "../constants/action-types";

const initialState = {
  imageDetail: [
    {
      id: 0,
      liked: false,
      likeCount: 0,
    },
  ],
};

export const likeReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_LIKE:
      return {
        id: payload.id,
        liked: true,
        likeCount: state.likeCount + 1,
      };

    case ActionTypes.UNSET_LIKE:
      return {
        id: payload.id,
        liked: false,
        likeCount: state.likeCount - 1,
      };
    default:
      return state;
  }
};
