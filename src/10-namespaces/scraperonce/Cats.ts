export namespace Cats {
  export enum Types {
    MaineCoon,
    AmericanShortHair,
    Abyssinian
  }
}

export namespace Cats {
  export class Cat {
    constructor(public name: string) {}
  }
}

export namespace Cats {
  export class MaineCoon extends Cat {}
}

export namespace Cats {
  export class AmericanShortHair extends Cat {}
}

export namespace Cats {
  export class Abyssinian extends Cat {}
}
