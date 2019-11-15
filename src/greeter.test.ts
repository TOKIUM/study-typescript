class Student {
  fullName: string;
  constructor(
    public firstName: string,
    public middleInitial: string,
    public lastName: string
  ) {
    this.fullName = firstName + " " + middleInitial + " " + lastName;
  }
}

interface Person {
  firstName: string;
  lastName: string;
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

test("greeter", () => {
  const nozomit = new Student("Nozomi", "N.", "Nishiyama");
  expect(nozomit.fullName).toEqual("Nozomi N. Nishiyama");
  expect(greeter({ firstName: "Nozomi", lastName: "Nishiyama" })).toEqual(
    "Hello, Nozomi Nishiyama"
  );
});
