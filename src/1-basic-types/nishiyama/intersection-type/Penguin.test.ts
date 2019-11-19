interface Cat {
  eyeColor: string;
}

interface Fish {
  velocity: number;
}

interface Bird {
  featherLength: number;
}

type Penguin = Fish & Bird;

function isPenguin(animal: any): animal is Penguin {
  return (animal as Penguin).velocity !== undefined && (animal as Penguin).featherLength !== undefined;
}

describe('isPenguin', () => {
  test('cat', () => {
    expect(isPenguin({ eyeColor: 'blue' })).toBe(false);
  });
  test('fish', () => {
    expect(isPenguin({ velocity: 20 })).toBe(false);
  });
  test('bird', () => {
    expect(isPenguin({ featherLength: 5 })).toBe(false);
  });
  test('cat & fish', () => {
    expect(isPenguin({ eyeColor: 'blue', velocity: 20 })).toBe(false);
  });
  test('fish & bird', () => {
    expect(isPenguin({ velocity: 20, featherLength: 5 })).toBe(true);
  });
  test('bird & cat', () => {
    expect(isPenguin({ featherLength: 5, eyeColor: 'blue' })).toBe(false);
  });
  test('cat & fish & bird', () => {
    expect(isPenguin({ featherLength: 5, velocity: 20, eyeColor: 'blue' })).toBe(false);
  });
})
