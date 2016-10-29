
const func = require('../../src/containers/Catalog.js');

describe('Catalog container filtration', () => {
  
  it('should be ok', () => {
    expect(func).to.be.ok;
  });

  it('should have functions with right names', () => {
    expect(func.applyPage).to.be.ok;
    expect(func.applyFilterWithoutPage).to.be.ok;
    expect(func.applySort).to.be.ok;
    expect(func.calcTotalPages).to.be.ok;
  });

  it('should apply right pagination', () => {
    const mockArr = 'Should make right pagination'.split('');
    expect(func.applyPage(mockArr,2,3).join(''))
                                      .to
                                      .be
                                      .equal('uld');
  });

  it('should correctly calculate items on last page', () => {
    const mockArr = 'Should'.split('');
    
    expect(func.applyPage(mockArr,2,5).join(''))
                                      .to
                                      .be
                                      .equal('d');

    expect(func.applyPage(mockArr,2,4).join(''))
                                      .to
                                      .be
                                      .equal('ld');
  })
  
  it('should return empty array if nothing on target page', () => {
    const mockArr = 'Should'.split('');

    expect(func.applyPage(mockArr,5,4)).to
                                      .be
                                      .deep
                                      .equal([]);
  })

  it('should calculate number of pages', () => {
    const mockArr = 'Shoul'.split('');
    expect(func.calcTotalPages(mockArr, 5)).to.be.equal(1);
    expect(func.calcTotalPages(mockArr, 1)).to.be.equal(5);
    expect(func.calcTotalPages(mockArr, 3)).to.be.equal(2);
    expect(func.calcTotalPages(mockArr, 2)).to.be.equal(3);
  });


  it('should filter by aviability', () => {
    const state = [
      {
        id: 1,
        isAvailable: false
      },
      {
        id: 2,
        isAvailable: true
      }
    ] 

    const filter = {
      IS_AVAILABLE: true
    }

    expect(func.applyFilterWithoutPage(state, filter)).to.deep.equal([{
        id: 2,
        isAvailable: true
      }])

  });

  it('should filter by MasterSystem', () => {
    const state = [
      {
        id: 1,
        isMasterSystem: false
      },
      {
        id: 2,
        isMasterSystem: true
      }
    ] 

    const filter = {
      IS_MASTER_SYSTEM: true
    }

    expect(func.applyFilterWithoutPage(state, filter)).to.deep.equal([{
        id: 2,
        isMasterSystem: true
      }]);

  });

  it('should filter by category', () => {
    const state = [
      {
        id: 1,
        categories: [{
          id: 1
        },
        {
          id: 2
        }]
      },
      {
        id: 2,
        categories: [{
          id: 2
        }]
      },
       {
        id: 3,
        categories: [{
          id: 1
        }]
      }
    ] 

    const filter = {
      CATEGORY: 1
    }

    expect(func.applyFilterWithoutPage(state, filter)).to.deep.equal([{
        id: 1,
        categories: [{
          id: 1
        },
        {
          id: 2
        }]
      },
       {
        id: 3,
        categories: [{
          id: 1
        }]
      }]);

  });

  it('should filter by vendor', () => {
    const state = [
      {
        id: 1,
        vendor: {
          id: 1,
        }
      },
      {
        id: 2,
        vendor: {
          id: 2
        }
      },
       {
        id: 3,
        vendor: {
          id: 1
        }
      }
    ] 

    const filter = {
      VENDOR: 1
    }

    expect(func.applyFilterWithoutPage(state, filter)).to.deep.equal([{
        id: 1,
        vendor: {
          id: 1
        }
      },
       {
        id: 3,
        vendor: {
          id: 1
        }
      }]);

  });

  it('should sort by price', () => {
    const state = [
      {
        id: 1,
        price: 2
      },
      {
        id: 2,
        price: 1
      },
       {
        id: 3,
        price: 3
      }
    ] 

    const sort = {
      type: 'PRICE',
      reversed: false
    }

    expect(func.applySort(state, sort)).to.deep.equal([{
        id: 2,
        price: 1
      },
      {
        id: 1,
        price: 2
      },
       {
        id: 3,
        price: 3
      }]);

  });

  it('should sort by price reversed', () => {
    const state = [
      {
        id: 1,
        price: 2
      },
      {
        id: 2,
        price: 1
      },
       {
        id: 3,
        price: 3
      }
    ] 

    const sort = {
      type: 'PRICE',
      reversed: true
    }

    expect(func.applySort(state, sort)).to.deep.equal([
      {
        id: 3,
        price: 3
      },
      {
        id: 1,
        price: 2
      },
      {
        id: 2,
        price: 1
      }
      ]);

  });
})