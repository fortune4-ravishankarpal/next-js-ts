import { render, screen, fireEvent } from "@testing-library/react";
import TodoApp from "./page";

describe("test to do application", () => {
    beforeAll(() => {
        render(<TodoApp />);
    });

    it("should render", () => {
        expect(document.querySelector(".input")).toBeVisible();
    });

    it("should add a todo item", () => {
        const text = "Walk the dog to todo item";
        const input = screen.getByTestId("todo-input");

        // Simulate input change
        fireEvent.change(input, { target: { value: text } });
        expect(input).toHaveValue(text);
    });
});
