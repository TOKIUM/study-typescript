type catName = 'たま' | 'みけ' | 'わださん';

interface Nyan {
  name: catName;
  toy: any;
}

class Cat implements Nyan {
  name: catName;
  toy: any;
  constructor(name: catName) {
    this.name = name;
    this.toy = null;
  }

  public yawn(): string {
    return 'Nyaaaaaaaaaaaaan';
  }

  public play(toy: any) {
    if (this.toy !== null && this.toy !== toy) {
      throw new Error('気分じゃないにゃん');
    }

    this.toy = toy;
  }
}

test('valid cat', () => {
  const cat = new Cat('みけ');
  expect(cat.name).toEqual('みけ');
  expect(cat.yawn()).toEqual('Nyaaaaaaaaaaaaan');
})

test('play', () => {
  const cat = new Cat('たま');
  expect(cat.toy).toBe(null);
  cat.play('猫じゃらし');
  expect(cat.toy).toBe('猫じゃらし');
  expect(() => { cat.play('まり') }).toThrow();
})
