describe('1. Is the page empty', () => {
  before(() => cy.visit(''));
  it('1) The caption is exist ', () => {
    cy.get('h2').should('have.text', 'The story of 3 dropdowns');
  });
  it('2) There are 3 selects ', () => {
    cy.get('select').should('have.length', 3);
  });
  it('3) The first select has label "Услуги" ', () => {
    cy.get('select')
      .eq(0)
      .parent()
      .find('span')
      .should('have.text', 'Услуги');
  });
  it('4) The 3rd select has label "Стили" ', () => {
    cy.get('select')
      .eq(2)
      .parent()
      .find('span')
      .should('have.text', 'Стили');
  });
  it('5) Each select by default has value "Не выбрано"', () => {
    cy.get('select').each($el => {
      cy.wrap($el).should('have.text', 'Не выбрано');
    });
  });
});

describe('2. Selects have options', () => {
  before(() => {
    cy.visit('');
    cy.server();
    cy.route('https://beta.autobooking.com/api/test/v1/search/terms').as(
      'getTerms'
    );
    cy.route('https://beta.autobooking.com/api/test/v1/search/brands_terms').as(
      'getBrands'
    );
    cy.route('https://beta.autobooking.com/api/test/v1/search/styles').as(
      'getStyles'
    );
  });
  it('1) Every select has at least 1 option ', () => {
    cy.wait('@getBrands');
    cy.get('select')
      .eq(1)
      .find('option')
      .its('length')
      .should('be.gt', 1);
    cy.wait('@getStyles');
    cy.get('select')
      .eq(2)
      .find('option')
      .its('length')
      .should('be.gt', 1);
    cy.wait('@getTerms');
    cy.get('select')
      .eq(0)
      .find('option')
      .its('length')
      .should('be.gt', 1);
  });
});

describe('3. Selecting option', () => {
  before(() => {
    cy.visit('');
    cy.server();
    cy.route('https://beta.autobooking.com/api/test/v1/search/terms').as(
      'getTerms'
    );
    cy.route('https://beta.autobooking.com/api/test/v1/search/brands_terms').as(
      'getBrands'
    );
    cy.route('https://beta.autobooking.com/api/test/v1/search/styles').as(
      'getStyles'
    );
  });
  it('1) After option selecting the url must change', () => {
    cy.wait('@getTerms');
    cy.get('select')
      .eq(0)
      .select('Замена сцепления')
      .should('have.value', 'zamena-stsepleniya');
    cy.url().should('eq', 'http://localhost:3000/s-zamena-stsepleniya/');
    cy.wait('@getBrands');
    cy.get('select')
      .eq(1)
      .select('Ford')
      .should('have.value', 'ford');
    cy.url().should('eq', 'http://localhost:3000/b-ford/s-zamena-stsepleniya/');
    cy.wait('@getStyles');
    cy.get('select')
      .eq(2)
      .select('Барокко')
      .should('have.value', 'barokko');
    cy.url().should(
      'eq',
      'http://localhost:3000/b-ford/s-zamena-stsepleniya/st-barokko/'
    );
  });
  it.only('2) After page reloading selects must have value', () => {
    cy.wait('@getTerms');
    cy.get('select')
      .eq(0)
      .select('Балансировка')
      .should('have.value', 'balansirovka');
    cy.url().should('eq', 'http://localhost:3000/s-balansirovka/');
    cy.wait('@getBrands');
    cy.get('select')
      .eq(1)
      .select('Ford')
      .should('have.value', 'ford');
    cy.url().should('eq', 'http://localhost:3000/b-ford/s-balansirovka/');
    cy.wait('@getStyles');
    cy.get('select')
      .eq(2)
      .select('Барокко')
      .should('have.value', 'barokko');
    cy.url().should(
      'eq',
      'http://localhost:3000/b-ford/s-balansirovka/st-barokko/'
    );
    cy.reload();
    cy.wait('@getTerms');
    cy.wait('@getBrands');
    cy.wait('@getStyles');
    cy.url().should(
      'eq',
      'http://localhost:3000/b-ford/s-balansirovka/st-barokko/'
    );
    cy.get('select')
      .eq(0)
      .should('have.value', 'balansirovka');
    cy.get('select')
      .eq(1)
      .should('have.value', 'ford');
    cy.get('select')
      .eq(2)
      .should('have.value', 'barokko');
  });
});
