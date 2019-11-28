export namespace Cats {
  export enum Types {
    MaineCoon,
    AmericanShortHair,
    Abyssinian
  }
}

export namespace Cats {
  export class Cat {
    public name: string;
    constructor(name: string) {
      this.name = name;
    }
  }
}

export namespace Cats {
  export class MaineCoon extends Cats.Cat {
  }
}

export namespace Cats {
  export class AmericanShortHair extends Cats.Cat {
  }
}

export namespace Cats {
  export class Abyssinian extends Cats.Cat {
  }
}

