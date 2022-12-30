import { combineReducers } from "redux";
import reducerMovies from "./reducerMovies";

const rootReducer = combineReducers({
  infoReducer: reducerMovies,
});

export default rootReducer;
