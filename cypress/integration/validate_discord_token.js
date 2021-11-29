describe('Validate the DISCORD_AUTH_TOKEN token', () => {
  it('Should return a 200 response code', () => {
    cy.request({
      method: 'GET',
      url: `${Cypress.env('DISCORD_BASE_URL')}/users/@me`,
      failOnStatusCode: false,
      headers: {
        Authorization: `Bot ${Cypress.env('DISCORD_AUTH_TOKEN')}`,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(Cypress.env('DISCORD_USER_ID'));
    });
  });
})
