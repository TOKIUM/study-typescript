// app/frontend/javascripts/applications/reports/components/ReportTable.jsx
/**
 * 検索文字列を含むプロジェクトを探す
 * project.displayId が displayId を含む、もしくは project.name が name を含むか否か
 * @param {string} displayId 文字列
 * @param {string} name 文字列
 * @param {Project} project Project
 * @return {boolean}
 */
function containSearchText(
  displayId: string,
  name: string,
  project: Project
): boolean {
  return (
    (!displayId || project.displayId.indexOf(displayId) > -1) &&
    (!name || (project.name && project.name.indexOf(name) > -1))
  );
}

class Project {
  displayId: string;
  name: string;

  constructor(displayId: string, name: string) {
    this.displayId = displayId;
    this.name = name;
  }
}

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
