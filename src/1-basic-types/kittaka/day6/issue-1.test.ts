import Cat from './issue-1';

describe("Cat", () => {
  const cat = new Cat('sleeping');

  test("#run", () => {
    cat.run()
    expect(cat.getState()).toEqual('running');
  });

  test("#play", () => {
    cat.play()
    expect(cat.getState()).toEqual('playing');
  });

  test("#eat", () => {
    cat.eat()
    expect(cat.getState()).toEqual('eating');
  });

  test("#sleep", () => {
    cat.sleep()
    expect(cat.getState()).toEqual('sleeping');
  });
})
