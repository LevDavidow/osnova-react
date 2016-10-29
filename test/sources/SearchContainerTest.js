
const func = require('../../src/containers/Search.js');

describe('Searhbox', () => {
  
  it('should be ok', ()=> {
    expect(func).to.be.ok;
  });

  it('should have functions with right names', ()=> {
    expect(func.applySearch).to.be.ok;
  });

  it('should do search by name',()=> {
    const arr = [
      {
        name: 'Foo',
        description: ''
      },
      {
        name: 'Bar',
        description: ''
      },
      {
        name: 'FooBar',
        description: ''
      }
    ];
    const query = 'Foo';
    expect(func.applySearch(arr,query)).to.be.deep.equal([
      {
        name: 'Foo',
        description: ''
      },
      {
        name: 'FooBar',
        description: ''
      }
      ])
  });

  it('should do search by description',()=> {
    const arr = [
      {
        description: 'Foo',
        name: ''
      },
      {
        description: 'Bar',
        name: ''
      },
      {
        description: 'FooBar',
        name: ''
      }
    ];
    const query = 'Foo';
    expect(func.applySearch(arr,query)).to.be.deep.equal([
      {
        description: 'Foo',
        name: ''
      },
      {
        description: 'FooBar',
        name: ''
      }
      ]);
  });

  it('should do search by description and name both',()=> {
    const arr = [
      {
        description: 'Foo',
        name: 'Foz'
      },
      {
        description: 'Bar',
        name: 'Foo'
      },
      {
        description: 'FooBar',
        name: 'Bar'
      },
      {
        description: 'Bar',
        name: 'Bar'
      }
    ];
    const query = 'Foo';
    expect(func.applySearch(arr,query)).to.be.deep.equal([
      {
        description: 'Foo',
        name: 'Foz'
      },
      {
        description: 'Bar',
        name: 'Foo'
      },
      {
        description: 'FooBar',
        name: 'Bar'
      }
      ]);
    });

  it('should ignore case',()=> {
    const arr = [
      {
        description: 'Foo',
        name: 'Foz'
      },
      {
        description: 'Bar',
        name: 'Foo'
      },
      {
        description: 'FooBar',
        name: 'Bar'
      },
      {
        description: 'Bar',
        name: 'Bar'
      }
    ];
    const query = 'foo';
    expect(func.applySearch(arr,query)).to.be.deep.equal([
      {
        description: 'Foo',
        name: 'Foz'
      },
      {
        description: 'Bar',
        name: 'Foo'
      },
      {
        description: 'FooBar',
        name: 'Bar'
      }
      ]);
    });
});