const expect = require('chai').expect;

describe('Visiting localhost dev enviornment for myRetail', () => {
  /*
    The default behavior for chromedriver
    is to wait until the DOM is complete.
    This means the test will fail if the
    timeout exceeds 15s. The homepage can
    take a while to load, so this fails
    intermittently.
  */
  it('price should have $ as prefix', () => {
    browser.url('/');
    const priceText = browser.getText('.online-price-value');
    expect(priceText).to.include('$');
  });

   it('product title should not be empty string', () => {
    browser.url('/');
    const productTitle = browser.getText('.title-product span');
    expect(productTitle).to.not.equal('');
  });

  it('primary image should have src property', () => {
    browser.url('/');
    const primaryImage = browser.getAttribute('.image-container img', 'src');
    expect(primaryImage).to.not.equal('');
  });
});