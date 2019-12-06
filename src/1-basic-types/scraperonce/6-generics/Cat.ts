import CatInterface from "./CatInterface";

export default abstract class Cat implements CatInterface {
  constructor(
    public name: string,
    public color: string,
    public hairLength: number = 2
  ) {}
}
