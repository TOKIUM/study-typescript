export namespace Cats {
  export enum Types {
    MaineCoon,
    AmericanShortHair,
    Abyssinian
  }
}

export namespace Cats {
  export class Cat {
    constructor(public name: string) { }
  }
}

export namespace Cats {
  export class MaineCoon extends Cats.Cat { }
}

export namespace Cats {
  export class AmericanShortHair extends Cats.Cat { }
}

export namespace Cats {
  export class Abyssinian extends Cats.Cat { }
}

