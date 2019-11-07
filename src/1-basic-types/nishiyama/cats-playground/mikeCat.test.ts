import Cat, { catName } from './cat';

class MikeCat extends Cat {
  readonly hairLength: number;

  constructor(name: catName) {
    super(name);
    this.hairLength = 10;
  }
}

test('mikeCat', () => {
  const mike = new MikeCat('みけ');
  expect(mike.name).toEqual('みけ');
  expect(mike.hairLength).toBe(10);
  expect(mike.yawn()).toEqual('Nyaaaaaaaaaaaaan');
})

test('play', () => {
  const mike = new MikeCat('みけ');
  expect(mike.toy).toBe(null);
  mike.play('猫じゃらし');
  expect(mike.toy).toBe('猫じゃらし');
  expect(() => { mike.play('まり') }).toThrow();
})

