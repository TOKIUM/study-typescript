import Animal from './animal';

interface Nyan extends Animal{
  run(): void;
};

type CatState =
  'running' | 'playing' | 'eating' | 'sleeping';

class Cat implements Nyan {
  private state: CatState;

  constructor(state: CatState) {
    this.state = state;
  }

  run() {
    this.state = 'running'
  }

  play() {
    this.state = 'playing'
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
}

export default Cat;
