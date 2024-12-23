import { useMutation, useQueryClient } from "@tanstack/react-query";
import { logOutUser } from "../../services/authService";
import { useNavigate } from "react-router-dom";

export default function useLogOut() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { isPending, mutate: logOut } = useMutation({
    mutationFn: logOutUser,
    onSuccess: () => {
      queryClient.removeQueries();
      navigate("/auth", { replace: true });
    },
  });

  return { isPending, logOut };
}
