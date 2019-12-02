import nyan from "./nyan";

class Cat {
  @nyan()
  hello(): string {
    return "こんちにわ";
  }
}

test("にゃんをつけるにゃん", () => {
  const cat = new Cat();
  expect(cat.hello()).toEqual("こんちにわにゃん");
});
