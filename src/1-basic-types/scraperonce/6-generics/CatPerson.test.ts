import CatPerson from './CatPerson';
import MaineCoon from "./MaineCoon";
import Cat from './Cat';
import AmericanShortHair from './AmericanShortHair';

const cat1 = new MaineCoon('だいふく', 'レッドタビー', 30);
const cat2 = new AmericanShortHair('バリ吉', 'シルバータビー', 4);

describe("CatPerson", () => {

  test("#sayName", () => {
    const person = new CatPerson<MaineCoon>(cat1);
    expect(person.sayName()).toEqual('なまえは だいふく だにゃー')
  });
  test("#sayColor", () => {
    const person = new CatPerson<MaineCoon>(cat1);
    expect(person.sayColor()).toEqual('毛のいろは レッドタビー だにゃー')
  });
  test("#sayHairLength", () => {
    const person = new CatPerson<MaineCoon>(cat1);
    expect(person.sayHairLength()).toEqual('毛のながさは 30 cm だにゃー')
  });
  test("#trim", () => {
    const person = new CatPerson<MaineCoon>(cat1);
    expect(person.sayHairLength()).toEqual('毛のながさは 30 cm だにゃー')
    person.trim(10)
    expect(person.sayHairLength()).toEqual('毛のながさは 10 cm だにゃー')
  });
  test("#changeCat", () => {
    const person = new CatPerson<Cat>(cat1);
    expect(person.sayName()).toEqual('なまえは だいふく だにゃー')
    person.changeCat(cat2);
    expect(person.sayName()).toEqual('なまえは バリ吉 だにゃー')
  });
});
