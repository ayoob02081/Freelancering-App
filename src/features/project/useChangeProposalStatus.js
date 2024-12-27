import toast from "react-hot-toast";

import { changeProposalStatusApi } from "../../services/proposalService";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export default function useChangeProposalStatus() {
  const queryClient = useQueryClient();

  const { isPending: isUpdating, mutate: changeProposalStatus } = useMutation({
    mutationFn: changeProposalStatusApi,
    onSuccess: (data) => {
      toast.success(data.message);

      queryClient.invalidateQueries({
        queryKey: ["user-status"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });

  return { isUpdating, changeProposalStatus };
}
