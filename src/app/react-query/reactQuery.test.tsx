import { render, screen } from "@testing-library/react";
import { test, expect } from "vitest";
import React from "react";
import Page from "./page";

test("Test rect query", () => {
    render(<Page />);
});
