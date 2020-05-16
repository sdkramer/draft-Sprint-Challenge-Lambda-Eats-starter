describe("First test", () => {
  it("should return true", () => {
    expect(0).to.equal(-0);
  });
});

describe("Tests for form inputs and submit", () => {
before(function () {
  cy.visit('http://localhost:3000/pizza') 
});

it('inputs name into name input', () => {
  cy.get(':nth-child(4) > input')
  .type('Amanda')
  .should('have.value', 'Amanda')
  .clear()
  .type('a')
      cy.contains("Name must include at least 2 characters")
})

it('checks to see if user can select toppings', () => {
  cy.get('[name="pepperoni"]')
  .check()
  .should('be.checked')

  cy.get('[name="sausage"]')
  .check()
  .should('be.checked')
})

it("checks to see if a user can submit the form", () => {
  cy.get('form').submit();
});

})