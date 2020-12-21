import { combineReducers } from "redux";

import patternReducer from "./pattern/patternReducer";
import { IPatternStoreState } from "./pattern/patternTypes";

export interface IApplicationState {
    pattern: IPatternStoreState;
}

const rootReducer = combineReducers({
    pattern: patternReducer,
});

export default rootReducer;
