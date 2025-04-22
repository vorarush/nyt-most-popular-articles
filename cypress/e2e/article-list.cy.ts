describe('NYT Most Popular Articles App', () => {

    beforeEach(() => {
        cy.intercept(
            'GET',
            'https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json*',
            {
                statusCode: 200,
                body: {
                    results: [
                        {
                            id: 1,
                            title: 'Test Article',
                            abstract: 'This is a mocked article',
                            byline: 'By Sample Author',
                            published_date: '2024-04-17',
                            url: 'https://nytimes.com/article1',
                            media: [],
                        },
                    ],
                },
            }
        ).as('getArticles');
    });

    it('displays article list correctly', () => {
        cy.visit('/');

        cy.contains(/loading/i).should('exist');


        cy.wait('@getArticles');

        cy.findByText(/test article/i).should('exist');
        cy.findByText(/by sample author/i).should('exist');

        cy.get('select').should('exist');
    });

    it('updates articles when dropdown changes', () => {
        cy.visit('/');
        cy.get('select').select('7');
        cy.get('select').should('have.value', '7');
    });
});
