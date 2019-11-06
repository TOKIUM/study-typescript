type catName = 'たま' | 'みけ' | 'わださん';

interface Nyan {
  name: catName;
}

class Cat implements Nyan {
  name: catName;
  constructor(name: catName) {
    this.name = name;
  }
}

test('valid cat', () => {
  const cat = new Cat('みけ');
  expect(cat.name).toEqual('みけ');
})
