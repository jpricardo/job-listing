describe('The Home Page', () => {
	it('should navigate to the jobs page', () => {
		cy.visit('/home');
		cy.get('div').contains('Jobs').click();

		cy.url().should('include', '/jobs');
	});

	it('should navigate to the job details page', () => {
		cy.visit('/jobs');
		cy.get('a[href="/jobs/1"]').first().click();

		cy.url().should('include', '/jobs/1');
	});
});
