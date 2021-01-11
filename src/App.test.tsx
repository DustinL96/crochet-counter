import React from "react";

import App from "./App";
import { render, screen } from "./utils/reduxTestUtils";

test("renders learn react link", () => {
    render(<App />);
    const linkElement = screen.getByText(/Stop Counting/i);
    expect(linkElement).toBeInTheDocument();
});
