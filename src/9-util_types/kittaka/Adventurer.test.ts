import { makeAdventurer } from './Adventurer';

test("airou test", () => {
  const airou = makeAdventurer({
    status: { hp: 100, mp: 0, satiety: 20 },
    actions: {
      eat: (food: string) => {
        if (food === 'fish') {
          // おいしく食べた🐟
          this.satiety = this.satiety + 10;
        }
        else if (food === 'caffe') {
          // ナニコレ😾
          this.hp = this.hp - 20;
          this.satiety = this.satiety + 5;
        }
        else {
          // 食べ物だと認識できない！お腹すいた...
          this.satiety = this.satiety - 1;
        }
      }
    }
  })

  expect(airou.hp).toBe(100);
  expect(airou.satiety).toBe(20);

  airou.eat('fish')

  // 何故か値が変わらない...?
  expect(airou.hp).toBe(110);
  expect(airou.satiety).toBe(30);
});
