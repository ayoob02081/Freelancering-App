import ProjectsTable from "../features/freelancer/project/ProjectsTable";
import ProjectsHeader from "../features/projects/ProjectsHeader";

function SubmitedProjects() {
  //   const { isLoading, project } = useOwnerProject();

  return (
    <div>
      <ProjectsHeader />
      <ProjectsTable />
    </div>
  );
}

export default SubmitedProjects;
