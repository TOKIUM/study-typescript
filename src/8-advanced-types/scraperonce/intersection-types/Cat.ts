import IPet from './IPet';
import Fish from './Fish';
import Bird from './Bird';

export default class Cat implements IPet {
  name = 'にゃんこ';

  eat(food: Fish | Bird): string {
    return `${food.name}はバチクソおいしいにゃあ`;
  }

  meow(): string {
    return 'おかねと豪邸がほしいにゃあ';
  }
}
