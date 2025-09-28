import { combineReducers } from "redux";
import dataReducer from "../slices/dataSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  // ui: uiReducer,
});

export { rootReducer };
