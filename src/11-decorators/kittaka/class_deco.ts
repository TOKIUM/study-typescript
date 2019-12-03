// ---
// ただの写経
function sealed(constructor: Function) {
  Object.seal(constructor);
  Object.seal(constructor.prototype);
}

@sealed
class Greeter {
  greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}

// ---
// 自作
function explosion<TFunction extends Function>(constructor: TFunction): TFunction {
  Object.defineProperty(constructor.prototype, 'explosion', {
    value: function() { return '💥' }
  });

  return constructor;
}

@explosion
class Prinny {
  constructor() {}

  attack() { return '🗡' }
}

export default Prinny;
