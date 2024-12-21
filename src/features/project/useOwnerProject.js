import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectApi } from "../../services/projectsService";

import { useParams } from "react-router-dom";

export default function useOwnerProject() {
  const { id } = useParams();

  const { data, isLoading } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getOwnerProjectApi(id),
    retry: false,
  });
  const { project } = data || {};

  return { isLoading, project };
}
