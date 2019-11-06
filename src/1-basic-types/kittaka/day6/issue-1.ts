import Animal from './animal';

interface Nyan extends Animal{
  run(): void;
};

type CatState =
  'running' | 'playing' | 'eating' | 'sleeping';

type CatName =
  'たま' | 'みけ' | 'わださん';

class Cat implements Nyan {
  private name: CatName;
  private state: CatState;
  public toy: unknown; // おもちゃは取り上げられる

  constructor(name: CatName) {
    this.toy = null;
    this.name = name;
  }

  run() {
    this.state = 'running'
  }

  play(toy: unknown) {
    if (this.toy === null) {
      this.toy = toy
    } else if (this.toy === toy) {
      this.toy = toy
    }
  }

  eat() {
    this.state = 'eating'
  }

  sleep() {
    this.state = 'sleeping'
  }

  getState() {
    return this.state;
  }

  get showNamePlate() {
    return this.name;
  }
}

export default Cat;
