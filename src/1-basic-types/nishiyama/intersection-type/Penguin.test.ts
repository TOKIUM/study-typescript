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
  // TODO: anyは使わなくても良いのだ
  // eslint-disable @typescript-eslint/no-explicit-any
  return (
    (animal as Penguin).velocity !== undefined &&
    (animal as Penguin).featherLength !== undefined
  );
}

describe("isPenguin", () => {
  test("cat", () => {
    const cat: Cat = { eyeColor: "blue" };
    expect(isPenguin(cat)).toBe(false);
  });
  test("fish", () => {
    const fish: Fish = { velocity: 20 };
    expect(isPenguin(fish)).toBe(false);
  });
  test("bird", () => {
    const bird: Bird = { featherLength: 5 };
    expect(isPenguin(bird)).toBe(false);
  });
  test("cat & fish", () => {
    const catBird = { eyeColor: "blue", velocity: 20 };
    expect(isPenguin(catBird)).toBe(false);
  });
  test("fish & bird", () => {
    const fishBird: Fish & Bird = { velocity: 20, featherLength: 5 };
    expect(isPenguin(fishBird)).toBe(true);
  });
  test("bird & cat", () => {
    const birdCat: Bird & Cat = { featherLength: 5, eyeColor: "blue" };
    expect(isPenguin(birdCat)).toBe(false);
  });
  test("cat & fish & bird", () => {
    const catFishBird: Cat & Fish & Bird = {
      featherLength: 5,
      velocity: 20,
      eyeColor: "blue"
    };
    expect(isPenguin(catFishBird)).toBe(true);
  });
});
