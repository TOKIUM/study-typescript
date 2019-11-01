import Project from "./project";

// app/frontend/javascripts/applications/reports/components/ReportTable.jsx
/**
 * 検索文字列を含むプロジェクトを探す
 * project.displayId が displayId を含む、もしくは project.name が name を含むか否か
 * @param {string} displayId 文字列
 * @param {string} name 文字列
 * @param {Project} project Project
 * @return {boolean}
 */
export default function containSearchText(
  displayId: string,
  name: string,
  project: Project
): boolean {
  return (
    (!displayId || project.displayId.indexOf(displayId) > -1) &&
    (!name || (project.name && project.name.indexOf(name) > -1))
  );
}
