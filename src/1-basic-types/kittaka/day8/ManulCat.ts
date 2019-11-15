import Cat from "./Cat";

class ManulCat extends Cat {
  static readonly catHairLength: number = 40;
  play(toy: string) {
    return `${toy} くれるとか、さすがやな!!!`;
  }

  isTangledHair() {
    return ManulCat.catHairLength > 10;
  }
}

export default ManulCat;
