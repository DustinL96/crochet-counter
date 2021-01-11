import { render as rtlRender, RenderResult } from "@testing-library/react";
import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

// Import project reducer
import rootReducer, { DEFAULT_APPLICATION_STATE } from "../store/index";

function render(
    ui: React.ReactElement,
    { store = createStore(rootReducer, DEFAULT_APPLICATION_STATE), ...renderOptions } = {},
): RenderResult {
    function Wrapper({ children }: any) {
        return <Provider store={store}>{children}</Provider>;
    }
    return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from "@testing-library/react";
// override render method
export { render };
