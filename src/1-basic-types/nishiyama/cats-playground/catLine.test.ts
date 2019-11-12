import mikeCat from './mikeCat.test';
import tamaCat from './tamaCat.test';

class CatLine<T extends mikeCat> {
  private waitingCats: T[];
  private tiredCats: T[];

  constructor(cats: T[]) {
    this.waitingCats = cats;
    this.tiredCats = [];
  }

  dealWithCustomer(): string {
    if (this.waitingCats.length === 0) {
      return '本日の営業はもう終了してるにゃん';
    }

    const tiredCat = this.waitingCats.pop();
    this.tiredCats.push(tiredCat);
    return `${tiredCat.name}は営業を終了したにゃん`;
  }

  howManyCatsAreWaiting(): number {
    return this.waitingCats.length;
  }

  howManyCatsAreTired(): number {
    return this.tiredCats.length;
  }
}

test('dealWtihCustomer', () => {
  const mike = new mikeCat('みけ');
  const tama = new tamaCat('たま');
  const catLine = new CatLine([mike, tama]);

  expect(catLine.howManyCatsAreWaiting()).toBe(2);
  expect(catLine.howManyCatsAreTired()).toBe(0);

  expect(catLine.dealWithCustomer()).toBe('たまは営業を終了したにゃん');

  expect(catLine.howManyCatsAreWaiting()).toBe(1);
  expect(catLine.howManyCatsAreTired()).toBe(1);

  expect(catLine.dealWithCustomer()).toBe('みけは営業を終了したにゃん');

  expect(catLine.howManyCatsAreWaiting()).toBe(0);
  expect(catLine.howManyCatsAreTired()).toBe(2);

  expect(catLine.dealWithCustomer()).toBe('本日の営業はもう終了してるにゃん');
})
