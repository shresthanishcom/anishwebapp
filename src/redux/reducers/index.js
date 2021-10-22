import { combineReducers } from "redux";
import { likeReducer } from "./likeReducer";

const reducers = combineReducers({
  allProducts: likeReducer,
});

export default reducers;
