import { useForm } from "react-hook-form";
import RHFSelect from "../../UI/RHFSelect";
import useChangeProposalStatus from "./useChangeProposalStatus";
import { QueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import Loading from "../../UI/Loading";

const options = [
  { label: "رد شده", value: 0 },
  { label: "در انتظار تایید", value: 1 },
  { label: "تایید شده", value: 2 },
];

function ChangeProposalStatus({ proposalId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();
  const { id: projectId } = useParams();

  const onSubmit = (data) => {
    changeProposalStatus(
      { proposalId, projectId, data },
      {
        onSuccess: () => {
          onClose();
          QueryClient.invalidateQueries({ queryKey: ["project", projectId] });
        },
      }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <RHFSelect
          name="status"
          label="تغییر وضعیت"
          register={register}
          required
          options={options}
        />
        <div className="!mt-8">
          {isUpdating ? (
            <Loading />
          ) : (
            <button type="submit" className="btn btn--primary w-full">
              تایید
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ChangeProposalStatus;
