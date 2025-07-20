describe('The Landing Page', () => {
	it('should navigate to the login page', () => {
		cy.visit('/');
		cy.get('a[href*="login"]').click();

		cy.url().should('include', '/login');
		cy.get('h2').contains('Authentication');
	});
});
