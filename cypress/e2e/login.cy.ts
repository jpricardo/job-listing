describe('The Login Page', () => {
	it('should navigate to the home page', () => {
		cy.visit('/login');
		cy.get('a[href*="home"]').click();

		cy.url().should('include', '/home');
	});
});
