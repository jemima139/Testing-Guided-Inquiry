describe('HomePage E2E Tests', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('should load the Hero section', () => {
      cy.get('header').should('be.visible'); 
    });
  
    it('should load the Features section', () => {
      cy.get('.features').should('be.visible');  
    });
  
    it('should load the Footer', () => {
      cy.get('footer').should('be.visible');
    });
  
    it('should have all sections rendered in the correct order', () => {
      cy.get('header').then(($header) => {
        cy.get('.features').should('be.visible').and('be.after', $header);
        cy.get('footer').should('be.visible').and('be.after', '.features');
      });
    });
  });
  