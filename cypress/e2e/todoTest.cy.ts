describe("template spec", () => {
    it("passes", () => {
        cy.visit("localhost:3000/simple-todo-app");
        let newTodo = "new todo";
        cy.get('[data-testid="todo-input"]').type(newTodo + "{enter}");
        cy.get(':nth-child(4) > [data-testid="todo-item"]').should("have.text", newTodo);
        /* ==== Generated with Cypress Studio ==== */
        cy.get(":nth-child(4) > .flex > .bg-destructive").click().should("not.exist");
        /* ==== End Cypress Studio ==== */
    });
});
