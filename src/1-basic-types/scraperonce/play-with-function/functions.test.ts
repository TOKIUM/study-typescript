import { book, play, playWith } from "./functions";
import Cat from "./Cat";
import Toy from "./Toy";

describe("functions", () => {
  test("#play", () => {
    const cat = new Cat('たま');
    const toy = { name: 'おもちゃ' } as Toy;
    const booked = book(cat, play);
    expect(booked(toy)).toEqual('たまはおもちゃで遊んでいます');
  });
})