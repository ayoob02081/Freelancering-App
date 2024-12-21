import useOwnerProject from "../features/project/useOwnerProject";
import ProjectHeader from "../features/project/ProjectHeader";
import ProjectProposals from "../features/project/ProjectProposals";
import Loading from "../UI/Loading";

function OwnerSingleProject() {
  const { isLoading, project } = useOwnerProject();

  if (isLoading) return <Loading />;

  return (
    <div>
      <ProjectHeader project={project} />
      <ProjectProposals proposals={project.proposals} />
    </div>
  );
}

export default OwnerSingleProject;
