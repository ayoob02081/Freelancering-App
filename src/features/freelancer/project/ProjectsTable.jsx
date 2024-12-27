import useProjects from "../../../hooks/useProjects";
import Empty from "../../../UI/Empty";
import Loading from "../../../UI/Loading";
import Table from "../../../UI/Table";
import ProjectRow from "./ProjectRow";


function ProjectsTable() {
  const { isLoading, projects } = useProjects();

  if (isLoading) return <Loading />;

  if (!projects.length) return <Empty resourseName="پروژه" />;

  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>عنوان پروژه</th>
        <th>بودجه</th>
        <th>ددلاین</th>
        <th>وضعیت</th>
        <th>عملیات</th>
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
