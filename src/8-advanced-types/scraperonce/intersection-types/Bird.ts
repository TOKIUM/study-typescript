import IPet from "./IPet";

export default class Bird implements IPet {
  name = 'とりさん';
  fly(): string {
    return '空即色是　色即是空';
  }
}
