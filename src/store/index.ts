import { combineReducers } from "redux";

import patternReducer from "./pattern/patternReducer";
import { DEFAULT_PATTERN_STORE_STATE, IPatternStoreState } from "./pattern/patternTypes";

export interface IApplicationState {
    pattern: IPatternStoreState;
}

export const DEFAULT_APPLICATION_STATE: IApplicationState = {
    pattern: DEFAULT_PATTERN_STORE_STATE,
};

const rootReducer = combineReducers({
    pattern: patternReducer,
});

export default rootReducer;
