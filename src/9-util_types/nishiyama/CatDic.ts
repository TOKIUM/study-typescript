interface CatInfo {
  length: number;
  sound: string;
  dateOfBirth: Date;
}

type CatName = 'queen' | 'mike' | 'bob';

const catDic: Record<CatName, CatInfo> = {
  queen: {
    length: 50,
    sound: 'Myaan',
    dateOfBirth: new Date(2015, 10, 9),
  },
  mike: {
    length: 10,
    sound: '...',
    dateOfBirth: new Date(2019, 11, 21),
  },
  bob: {
    length: 70,
    sound: 'Bow wow!', // very dog-lile
    dateOfBirth: new Date(2010, 7, 10),
  },
};

export default catDic;
