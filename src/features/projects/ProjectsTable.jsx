import Table from "../../UI/Table";
import ProjectRow from "./ProjectRow";
import useOwnerProjects from "./useOwnerProjects";

function ProjectsTable() {
  const { isLoading, projects } = useOwnerProjects();

  if (isLoading) return <p>Loading...</p>;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>دسته بندی</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>تگ ها</th>
        <th>فریلنسر</th>
        <th>وضعیت</th>
        <th>عملیات</th>
        <th>درخواست ها</th>
      </Table.Header>
      <Table.body>
        {projects.map((project, index) => (
          <ProjectRow key={project._id} project={project} index={index} />
        ))}
      </Table.body>
    </Table>
  );
}

export default ProjectsTable;
