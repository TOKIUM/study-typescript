export default interface Nyan {
  run(): string;
  play(toy: any): string; // eslint-disable-line @typescript-eslint/no-explicit-any
  eat(food: string): string;
  sleep(time: number): string;
}
