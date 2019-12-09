import Koupenchan from "./koupenchan";
import Person from "./person";

describe("コウペンちゃん", () => {
  test("#admire", () => {
    const staka = new Person("staka");
    const koupenchan = new Koupenchan();

    expect(koupenchan.admire(staka)).toBe("stakaさん、えら〜い");
  });

  test("#randomAdmire", () => {
    const hisataka = new Person("hisataka");
    const yuki = new Person("yuki");
    const koupenchan = new Koupenchan();

    koupenchan.remember(hisataka);
    koupenchan.remember(yuki);

    expect(koupenchan.randomAdmire().includes("えら〜い")).toBe(true);
  });

  test("#remember", () => {
    const satoshi = new Person("satoshi");
    const hisataka = new Person("hisataka");
    const koupenchan = new Koupenchan();

    koupenchan.remember(satoshi);
    expect(koupenchan.rememberedPersons.length).toBe(1);
    expect(koupenchan.rememberedPersons[0].name).toBe("satoshi");

    koupenchan.remember(hisataka);
    expect(koupenchan.rememberedPersons.length).toBe(2);
    expect(koupenchan.rememberedPersons[0].name).toBe("satoshi");
    expect(koupenchan.rememberedPersons[1].name).toBe("hisataka");
  });

  test("#know", () => {
    const yuki = new Person("yuki");
    const koupenchan = new Koupenchan();

    expect(koupenchan.know(yuki)).toBe(false);

    koupenchan.remember(yuki);
    expect(koupenchan.know(yuki)).toBe(true);
  });

  test("#knowAll", () => {
    const nozomi = new Person("nozomi");
    const staka = new Person("staka");
    const koupenchan = new Koupenchan();

    expect(koupenchan.knowAll([nozomi, staka])).toBe(false);

    koupenchan.remember(nozomi);
    expect(koupenchan.knowAll([nozomi, staka])).toBe(false);

    koupenchan.remember(staka);
    expect(koupenchan.knowAll([nozomi, staka])).toBe(true);
  });
});
