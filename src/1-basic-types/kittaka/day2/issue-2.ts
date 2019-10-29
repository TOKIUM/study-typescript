type Project = {
  displayId: string,
  name: string,
}

const containSearchText = (
  displayId: string,
  name: string,
  project: Project,
): boolean => {
  return (!displayId || (project.displayId.indexOf(displayId) > -1))
    && (!name || (project.name && project.name.indexOf(name) > -1));
}

export default containSearchText;
