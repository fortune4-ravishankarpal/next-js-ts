import { fireEvent, render, screen } from "@testing-library/react";
import TodoApp from "./page";
import { it, expect, beforeAll } from "vitest";
describe("test to do application", () => {
    beforeAll(() => {
        render(<TodoApp />);
    });

    it("should render", () => {
        const linkElement = screen.getByText(/Todo App/i);
        expect(linkElement).toBeVisible();
    });

    it("should add new todo", () => {
        // data-testid: todo-input
        const todoInput = screen.getByTestId("todo-input");
        todoInput.focus();
        let todoValue = "testTodo123";
        fireEvent.change(todoInput, {
            target: {
                value: todoValue,
            },
        });

        fireEvent.keyDown(todoInput, {
            key: "Enter",
            code: "Enter",
            charCode: 13,
        });
        expect(todoValue).toBeVisible();
    });
});
