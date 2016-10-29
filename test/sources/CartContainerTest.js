
const func = require('../../src/containers/Cart');

describe('Cart container calculations', () => {
  
  it('should be ok', () => {
    expect(func).to.be.ok;
  });

  it('should have functions with right names', () => {
    expect(func.getProductsInCart).to.be.ok;
    expect(func.calculateTotalPrice).to.be.ok;
  });


  it('should reduce expected products to cart', () => {
    const mockState = [{
      id: 1,
      price: 2
    }, {
      id: 2,
      price: 2
    }];
    const mockCart = [{
      id: 1,
      quantity: 2
    }];

    expect(func.getProductsInCart(mockState, mockCart)).to.be.deep.equal([{
      id: 1,
      price: 2,
      quantity: 2
    }])
  
  });

  it('should calculate total price correctily', () => {
    const mockState = [{
      id: 1,
      price: 2,
      quantity: 1
    }, {
      id: 2,
      price: 2,
      quantity: 2
    }];
    
    expect(func.calculateTotalPrice(mockState)).to.equal(6);

  });
});