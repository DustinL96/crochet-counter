import "@testing-library/jest-dom";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, fireEvent, screen } from "../../../utils/reduxTestUtils";
import HomeScreen from "../HomeScreen";

test("Should render Home Screen", () => {
    render(
        <BrowserRouter>
            <HomeScreen />
        </BrowserRouter>,
    );
    // getBy will throw if more than one matches.
    // Use getAllBy for more than one match.
    expect(screen.getByText("Stop Counting")).toBeInTheDocument();
    expect(screen.getByText("Let us do it for you")).toBeInTheDocument();
    expect(screen.getByText("Get Started")).toBeInTheDocument();
});

test("Should redirect out of Home Screen after clicking Get Started", () => {
    // Use Browser Router to allow test to render Redirect component.
    render(
        <BrowserRouter>
            <HomeScreen />
        </BrowserRouter>,
    );

    expect(screen.getByText("Stop Counting")).toBeInTheDocument();
    fireEvent.click(screen.getByText("Get Started"));

    // Query By will be null instead of throwing error if not found.
    expect(screen.queryByText("Stop Counting")).toBeNull();
});
