import ICat from "./ICat";

export default abstract class Cat implements ICat {
  constructor(
    public name: string,
    public color: string,
    public hairLength: number = 2
  ) { }
}