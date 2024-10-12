import { render } from "@testing-library/react";
import TodoApp from "./page";

describe("<App />", () => {
  it("renders", () => {
    render(<TodoApp />);
    expect(true).toBeTruthy();
  });
});
