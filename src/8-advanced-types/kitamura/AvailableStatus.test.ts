enum ReportStatus {
  Created = 1,
  Applied = 2,
  Approved = 3,
  Paid = 4
}

type AvailableStatus = keyof typeof ReportStatus;
type ApprovableStatus = "Applied" | "Created";

describe("ApprovableStatus", () => {
  type Status = Extract<AvailableStatus, ApprovableStatus>;
  const hoge: Status = "Applied";
  test("", () => {
    expect(hoge).toEqual("Applied");
  });
});
