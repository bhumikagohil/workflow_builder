import { combineReducers } from "redux";

import workflowReducer from "./Workflow/workflow-reducers";

const rootReducer = combineReducers({
  workflow: workflowReducer,
});

export default rootReducer;
