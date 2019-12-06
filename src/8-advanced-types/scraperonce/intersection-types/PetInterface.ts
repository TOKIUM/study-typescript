export default interface PetInterface {
  name: string;
  swim?(): string;
  meow?(): string;
  bark?(): string;
  eat?(food: PetInterface): string;
  fly?(): string;
}
