import PetInterface from "./PetInterface";

export default class Bird implements PetInterface {
  name = "とりさん";
  fly(): string {
    return "空即色是　色即是空";
  }
}
