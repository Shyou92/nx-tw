describe('twitter', () => {
  beforeEach(() => cy.visit('/iframe.html?id=appcomponent--primary'));
  it('should render the component', () => {
    cy.get('cs3-workspace-root').should('exist');
  });
});