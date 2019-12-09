import Person from "./person";

export default class Koupenchan {
  rememberedPersons = [] as Person[];

  randomAdmire(): string {
    const index = Math.floor(
      Math.random() * this.rememberedPersons.length
    ) as number;
    const person = this.rememberedPersons[index];

    return this.admire(person);
  }

  admire(person: Person): string {
    return `${person.name}さん、えら〜い`;
  }

  remember(person: Person): void {
    this.rememberedPersons.push(person);
  }

  knowAll(persons: Person[]): boolean {
    return persons.every(person => {
      return this.know(person);
    });
  }

  know(person: Person): boolean {
    return this.rememberedPersons.some(rPerson => {
      return rPerson.name === person.name;
    });
  }
}
