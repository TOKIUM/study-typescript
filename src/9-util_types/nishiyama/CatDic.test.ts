import catDic from './CatDic';

describe('catDic', () => {
  test('queen', () => {
    const queenInfo = catDic.queen;
    expect(queenInfo.length).toBe(50);
    expect(queenInfo.sound).toBe('Myaan');
    expect(queenInfo.dateOfBirth).toStrictEqual(new Date(2015, 10, 9));
  });
  test('mike', () => {
    const mikeInfo = catDic.mike;
    expect(mikeInfo.length).toBe(10);
    expect(mikeInfo.sound).toBe('...',);
    expect(mikeInfo.dateOfBirth).toStrictEqual(new Date(2019, 11, 21));
  });
  test('bob', () => {
    const bobInfo = catDic.bob;
    expect(bobInfo.length).toBe(70);
    expect(bobInfo.sound).toBe('Bow wow!');
    expect(bobInfo.dateOfBirth).toStrictEqual(new Date(2010, 7, 10));
  });
})
