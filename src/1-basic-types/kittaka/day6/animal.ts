/**
 * くう, ねる, あそぶ
 */
export default interface Animal {
  eat(): void;
  sleep(): void;
  play(toy: unknown): void;
}
