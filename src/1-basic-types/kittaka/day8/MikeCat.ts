import Cat from './Cat';

class MikeCat extends Cat {
  static readonly catHairLength: number = 10;
  play(toy: string) {
    return `仕方ない. ${toy} で遊ぶか`
  }
  isTangledHair() {
    return MikeCat.catHairLength > 10
  }
}

export default MikeCat;
