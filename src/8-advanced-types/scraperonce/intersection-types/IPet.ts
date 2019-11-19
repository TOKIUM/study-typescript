export default interface IPet {
  name: string;
  swim?(): string;
  meow?(): string;
  bark?(): string;
  eat?(food: IPet): string;
  fly?(): string;
}
