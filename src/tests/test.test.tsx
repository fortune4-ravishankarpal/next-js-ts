import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import React from "react";

export default function Tetest() {
    console.log("called");
    return <div>Home</div>;
}

test("renders the component correctly", () => {
    render(<Tetest />);
    const linkElement = screen.getByText(/Home/i);
    expect(linkElement).toBeVisible();
});
