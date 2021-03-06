import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";

import { COUNTER_SCREEN_PATH, HOME_SCREEN_PATH, PATTERN_SCREEN_PATH } from "../defs/screenPaths";

import ScreenHeader from "./common/ScreenHeader";
import CrochetCounterScreen from "./screens/CrochetCounterScreen";
import HomeScreen from "./screens/HomeScreen";
import PatternCreationScreen from "./screens/PatternCreationScreen";

function Router(): React.ReactElement {
    return (
        <HashRouter basename="/">
            <ScreenHeader />
            <Switch>
                <Route path={HOME_SCREEN_PATH} exact component={HomeScreen} />
                <Route path={COUNTER_SCREEN_PATH} exact component={CrochetCounterScreen} />
                <Route path={PATTERN_SCREEN_PATH} exact component={PatternCreationScreen} />
                <Redirect to={HOME_SCREEN_PATH} />
            </Switch>
        </HashRouter>
    );
}

export default Router;
