describe("Testing app", () => {
  beforeEach(() => {
    cy.visit("https://elegancehub.vercel.app");
  });

  it("is able to log in", () => {
    cy.contains("Login").should("exist");
    cy.get("#email").type("elegancehubtest@gmail.com");

    // Fill in the password field
    cy.get("#password").type("Testing12!");

    cy.get("button").eq(0).click();

    cy.contains("Discover the Latest Fashion Trends").should("exist", {
      timeout: 25000,
    });
    cy.contains("Trending Now").should("exist");
    cy.contains("Trending Now").click();

    cy.contains("Summer Floral Dress").should("exist", {
      timeout: 10000,
    });
    cy.contains("Summer Floral Dress").click();

    cy.get("#M").click();
    cy.contains("Add to Cart").should("exist");
    cy.contains("Add to Cart").click();

    cy.get("#cart").click();

    cy.contains("Shopping Cart").should("exist", {
      timeout: 10000,
    });

    cy.contains("Checkout").should("exist");
    cy.contains("Checkout").click();

    cy.contains("Checkout Form").should("exist", {
      timeout: 10000,
    });
  });
});
