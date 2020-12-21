import { applyMiddleware, createStore, Store } from "redux";
import logger from "redux-logger";

import rootReducer from "./index";

function configureStore(): Store {
    return createStore(rootReducer, applyMiddleware(logger));
}

export default configureStore;
