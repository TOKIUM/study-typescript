import Cat from './Cat';
import MaineCoon from './MaineCoon';
import AmericanShortHair from './AmericanShortHair';
import MyMap from './MyMap';

const cat1 = new MaineCoon('だいふく', 'レッドタビー', 30);
const cat2 = new AmericanShortHair('バリ吉', 'シルバータビー', 4);
const cat3 = new AmericanShortHair('すあま', 'シルバータビー', 3);

describe('MyMap', () => {

  test('catDic', () => {
    const catDic = new MyMap<string, Cat>();

    catDic.set(cat1.name, cat1);
    catDic.set(cat2.name, cat2);
    catDic.set(cat3.name, cat3);

    expect(catDic.getKeys()).toEqual(['だいふく', 'バリ吉', 'すあま']);
    expect(catDic.get('だいふく')).toEqual(cat1);
    expect(catDic.get('バリ吉')).toEqual(cat2);
    expect(catDic.get('すあま')).toEqual(cat3);

    expect(catDic.remove('タマ')).toEqual(false);
    expect(catDic.remove('バリ吉')).toEqual(true);

    expect(catDic.getKeys()).toEqual(['だいふく', 'すあま']);
  });

  test('catFriendDic', () => {
    const catFriendDic = new MyMap<Cat, Cat>();

    // なかよし
    catFriendDic.set(cat1, cat2);
    catFriendDic.set(cat2, cat3);
    catFriendDic.set(cat3, cat1);

    expect(catFriendDic.getKeys()).toEqual([cat1, cat2, cat3]);

    // コミュニティから排除
    expect(catFriendDic.remove(cat2)).toEqual(true);
    expect(catFriendDic.getKeys()).toEqual([cat1, cat3]);

    expect(catFriendDic.get(cat1)).toEqual(cat2);
    expect(catFriendDic.get(cat2)).toEqual(null);
    expect(catFriendDic.get(cat3)).toEqual(cat1);
  });
});
