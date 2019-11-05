interface Nyan {
  name: string;
  toy: string;
}

class Cat implements Nyan {
  name: string;
  toy: string;
  constructor(name: string, toy: string) {
    if (!['たま', 'みけ', 'わださん'].includes(name)) {
      throw new Error();
    }
    this.name = name;
    this.toy = toy;
  }
}

test('valid cat', () => {
  const cat = new Cat('みけ', '猫じゃらし');
  expect(cat.name).toEqual('みけ');
  expect(cat.toy).toEqual('猫じゃらし');
})

test('invalid cat', () => {
  expect(new Cat('しば犬まる', 'ほね')).toThrow();
})
