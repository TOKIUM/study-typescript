import greeter from "#/helloworld";

test("greeter", () => {
  expect(greeter("cat")).toBe("Hello, cat");
});
