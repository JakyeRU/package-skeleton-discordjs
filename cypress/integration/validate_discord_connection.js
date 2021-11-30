describe('Validate Discord Connection', function() {
    it('Should connect to Discord', function() {
        cy.exec('npm run start:bot', {
            env: {
                DISCORD_AUTH_TOKEN: Cypress.env('DISCORD_AUTH_TOKEN')
            }
        }).then(result => {
            expect(result.stdout).to.contain(`[INFO] Connected to Discord as ${Cypress.env('DISCORD_USER_ID')}.`);
        })
    })
})
