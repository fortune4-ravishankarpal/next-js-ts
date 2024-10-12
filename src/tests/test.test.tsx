import Home from "@/app/page";
import { render, screen } from "@testing-library/react";

describe("Home", () => {
    it("should render", () => {
        render(<Home />);
        expect(screen.getByRole("heading", { level: 1, name: "Home" })).toBeVisible();
    });
});
