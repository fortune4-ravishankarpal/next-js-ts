import React from "react";
import App from "./page";

describe("<App />", () => {
    it.only("renders", () => {
        cy.mount(<App />);
        cy.get(":nth-child(1) > .flex > .bg-destructive").should("contain", "X").click();
        cy.get(".input").type("test").should("have.value", "test").type("{enter}");
    });
});
