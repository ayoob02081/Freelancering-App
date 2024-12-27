import { useForm } from "react-hook-form";
import RHFSelect from "../../../UI/RHFSelect";
import Loading from "../../../UI/Loading";
import useChangeUserStatus from "../useChangeUserStatus";
import { useQueryClient } from "@tanstack/react-query";

const options = [
  { label: "رد کردن", value: 0 },
  { label: "در صف انتظار", value: 1 },
  { label: "تایید کردن", value: 2 },
];

function ChangeUserStatus({ userId, onClose }) {
  const { register, handleSubmit } = useForm();
  const { changeUserStatus, isUpdating } = useChangeUserStatus();
  const queryClient = useQueryClient();
  const onSubmit = (data) => {
    changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
          onClose();
          queryClient.invalidateQueries({ queryKey: ["users"] });
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

export default ChangeUserStatus;
