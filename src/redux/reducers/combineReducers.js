//      **COMBINING REDUCERS**
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import projectReducer from "./projectReducer";
import resourceReducer from "./resourceReducer";
import worklogsReducer from "./worklogsReducer";
import { reducer as toastrReducer } from "react-redux-toastr";
const rootReducer = combineReducers({
  toastr: toastrReducer,
  auth: authReducer,
  project: projectReducer,
  resource: resourceReducer,
  worklogs: worklogsReducer
});

export default rootReducer;
