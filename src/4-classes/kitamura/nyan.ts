export default interface Nyan {
  run(): void;
  play(toy: string): string;
  eat(food: string): string;
  sleep(time: number): string;
}
