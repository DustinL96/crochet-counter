import { AnyAction } from "redux";

import { DEFAULT_PATTERN_STORE_STATE, IPatternStoreState } from "./patternTypes";

function patternReducer(
    state: IPatternStoreState = DEFAULT_PATTERN_STORE_STATE,
    action: AnyAction,
): IPatternStoreState {
    switch (action.type) {
        default:
            return state;
    }
}

export default patternReducer;
