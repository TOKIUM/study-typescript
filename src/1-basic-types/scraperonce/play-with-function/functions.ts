import Toy from './Toy';
import Cat from './Cat';
import Person from './Person';
import GentlePerson from './GentlePerson';

export function book(cat: Cat, func: Function) {
  return func.bind(cat);
}

export function play(toy: Toy) {
  return [this.name, 'は', toy.name, 'で遊んでいます'].join('');
}

export function playWith(toy: Toy, person: Person);
export function playWith(toy: Toy, person: GentlePerson);
export function playWith(toy, person) {
  if (person instanceof GentlePerson) {
    return [this.name, 'は', person.name, 'といっしょに', toy.name, 'で遊びたいけど、ずっと撫でられています。'].join('');
  }
  else if (person instanceof Person) {
    return [this.name, 'は', person.name, 'といっしょに', toy.name, 'で遊んでいます。'].join('');
  }
}
