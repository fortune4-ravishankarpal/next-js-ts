import React from "react";
import Page from "./page";

describe("<Page />", () => {
    it("renders", () => {
        // see: https://on.cypress.io/mounting-react
        cy.mount(<Page />);
        cy.get("form").should("be.visible");

        cy.get("input[name='name']").should("be.visible").type("John");

        cy.get("input[name='age']").should("be.visible").type("30");

        cy.get("input[name='email']").should("be.visible").type("a@b.com");

        cy.get("input[name='name1']").should("be.visible").type("John");

        cy.get("input[name='age1']").should("be.visible").type("30");

        cy.get("input[name='email1']").should("be.visible").type("a@b.com");

        cy.get("button[type='button']").should("be.visible").click();

        cy.get("[data-testid='loading']").should("be.visible").and("have.text", "Loading...");
    });
});
