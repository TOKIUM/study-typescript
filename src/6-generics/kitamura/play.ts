export class Cat {
  play(): string {
    return "にゃんにゃんしてるにゃん";
  }
}

export interface CatAware {
  cat: Cat;
}

export function play<T extends CatAware>(arg: T): string {
  return arg.cat.play();
}
