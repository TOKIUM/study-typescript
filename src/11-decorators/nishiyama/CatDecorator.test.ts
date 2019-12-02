function nyan(): Function {
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    return { value: `${descriptor.value.call()}にゃん` };
  };
}

class Cat {
  feeling: string;

  constructor(feeling: string) {
    this.feeling = feeling;
  }

  @nyan()
  tellFeeling(): string {
    return `今の気持ちは${this.feeling}`;
  }
}

test('#tellFeeling', () => {
  const cat = new Cat('最高だ');

  expect(cat.tellFeeling).toBe('今の気持ちは最高だにゃん');
})
