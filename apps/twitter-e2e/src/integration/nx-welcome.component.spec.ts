describe('twitter', () => {
  beforeEach(() => cy.visit('/iframe.html?id=nxwelcomecomponent--primary'));
  it('should render the component', () => {
    cy.get('cs3-workspace-nx-welcome').should('exist');
  });
});