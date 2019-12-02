import { Cat } from './cat';

test("AwsClients#CloudWatchClient", () => {
  const cat = new Cat();
  const o = cat.say('hello');
  console.log(o);
});