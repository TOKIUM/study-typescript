function nyan() {
  return function (target, _propertyKey: string, descriptor: PropertyDescriptor): object {
    console.log(descriptor.value() + 'Nyan');
    return { word: descriptor.value() + 'Nyan' };
  } 
};

export class Cat {
  @nyan()
  say(word: string): string {
    console.log(word);
    return word;
  };
}

