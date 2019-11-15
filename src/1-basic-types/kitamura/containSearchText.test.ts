import containSearchText from "./containSearchText";
import Project from "./Project";

describe("containSearchText", () => {
  test("same displayId and name with the project", () => {
    const displayId = "a";
    const name = "A";
    const project: Project = new Project(displayId, name);

    expect(containSearchText(displayId, name, project)).toBe(true);
  });

  test("with different displayId", () => {
    const displayId = "a";
    const name = "A";
    const project: Project = new Project("displayId", name);

    expect(containSearchText(displayId, name, project)).toBe(true);
  });

  test("with different name", () => {
    const displayId = "a";
    const name = "A";
    const project: Project = new Project(displayId, "name");

    expect(containSearchText(displayId, name, project)).toBe(false);
  });

  test("with different displayId and name", () => {
    const displayId = "a";
    const name = "A";
    const project: Project = new Project("displayId", "name");

    expect(containSearchText(displayId, name, project)).toBe(false);
  });
});
