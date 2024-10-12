import { render, screen } from "@testing-library/react";
test("renders the component correctly", () => {
  render(<h1>Home</h1>);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeVisible();
});
