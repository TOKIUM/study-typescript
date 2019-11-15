export abstract class Toy {
  readonly name: string;
}

export class Nekojarashi extends Toy {
  readonly name = "ねこじゃらし";
}

export class Ball extends Toy {
  readonly name = "ボール";
}
