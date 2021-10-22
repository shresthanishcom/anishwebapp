import { ActionTypes } from "../constants/action-types";

export const setLike = (imageDetail) => {
  return {
    type: ActionTypes.SET_LIKE,
    payload: {
      id: imageDetail.id,
      liked: imageDetail.liked,
      likeCount: imageDetail.likeCount,
    },
  };
};

export const unsetLike = (imageDetail) => {
  return {
    type: ActionTypes.UNSET_LIKE,
    payload: {
      id: imageDetail.id,
      liked: imageDetail.liked,
      likeCount: imageDetail.likeCount,
    },
  };
};
