import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";

const reducers = combineReducers({
  likeReducer,
});

export default reducers;
