import getProgress from "./getProgress";

describe("getProgress", () => {
  test("進捗50%", () => {
    const finishedApprovals: string[] = ["1", "2", "3"];
    const remainingApprovals: string[] = ["4", "5", "6"];

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(50);
  });

  test("進捗0%", () => {
    const finishedApprovals: string[] = [];
    const remainingApprovals: string[] = ["4", "5", "6"];

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(0);
  });

  test("進捗100%", () => {
    const finishedApprovals: string[] = ["1", "2", "3"];
    const remainingApprovals: string[] = [];

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(100);
  });

  test("ぬるぽ1", () => {
    const finishedApprovals: string[] = null;
    const remainingApprovals: string[] = ["4", "5", "6"];

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(0);
  });

  test("ぬるぽ2", () => {
    const finishedApprovals: string[] = ["1", "2", "3"];
    const remainingApprovals: string[] = null;

    expect(getProgress(finishedApprovals, remainingApprovals)).toBe(0);
  });
});
