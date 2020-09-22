import counterReducer from "./counterReducer";
import loginReducer from "./loginReducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  counter: counterReducer,
  login: loginReducer
});

export default rootReducer;
