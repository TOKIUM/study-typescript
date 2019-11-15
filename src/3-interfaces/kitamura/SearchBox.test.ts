import SearchBox from "./SearchBox";

describe("handleStatusChange", () => {
  test("check default", () => {
    const searchBox: SearchBox = new SearchBox();
    searchBox.handleStatusChange(true, "default");
    expect(searchBox.searchCondition.status).toEqual(["default", "applied"]);
  });

  test("uncheck default", () => {
    const searchBox: SearchBox = new SearchBox();
    searchBox.handleStatusChange(false, "default");
    expect(searchBox.searchCondition.status).toEqual(["applied"]);
  });

  test("check nyan", () => {
    const searchBox: SearchBox = new SearchBox();
    searchBox.handleStatusChange(true, "nyan");
    expect(searchBox.searchCondition.status).toEqual([
      "default",
      "applied",
      "nyan"
    ]);
  });
});
